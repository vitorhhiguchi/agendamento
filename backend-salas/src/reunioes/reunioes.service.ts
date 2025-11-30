import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReuniaoDto } from './dto/create-reuniao.dto';
import { UpdateReuniaoDto } from './dto/update-reuniao.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ReunioesService {
  constructor(private prisma: PrismaService) {}

  // --- CREATE ---
  async create(data: CreateReuniaoDto) {
    // 1. Valida se a sala existe (NOVO!)
    await this.validarSalaExiste(data.salaId);

    // 2. Valida se inicio < fim
    this.validarDatas(data.inicio, data.fim);

    // 3. Valida conflito de agenda
    await this.validarConflito(data.inicio, data.fim, data.salaId);

    return this.prisma.reuniao.create({ data });
  }

  // --- FIND ALL ---
  findAll() {
    return this.prisma.reuniao.findMany({
      include: { sala: true },
    });
  }

  // --- FIND ONE ---
  async findOne(id: number) {
    const reuniao = await this.prisma.reuniao.findUnique({
      where: { id },
      include: { sala: true },
    });

    if (!reuniao) {
      throw new NotFoundException(`Reunião com ID ${id} não encontrada.`);
    }
    return reuniao;
  }

  // --- UPDATE ---
  async update(id: number, data: UpdateReuniaoDto) {
    const reuniaoAtual = await this.prisma.reuniao.findUnique({ where: { id } });

    if (!reuniaoAtual) {
      throw new NotFoundException(`Reunião com ID ${id} não encontrada.`);
    }

    // Se o usuário está tentando mudar a sala, verificamos se a NOVA sala existe (NOVO!)
    if (data.salaId) {
      await this.validarSalaExiste(data.salaId);
    }

    const inicioFinal = data.inicio ? data.inicio : reuniaoAtual.inicio;
    const fimFinal = data.fim ? data.fim : reuniaoAtual.fim;
    const salaIdFinal = data.salaId ? data.salaId : reuniaoAtual.salaId;

    if (data.inicio || data.fim) {
      this.validarDatas(inicioFinal, fimFinal);
    }

    if (data.inicio || data.fim || data.salaId) {
      await this.validarConflito(inicioFinal, fimFinal, salaIdFinal, id);
    }

    return this.prisma.reuniao.update({
      where: { id },
      data,
    });
  }

  // --- REMOVE ---
  async remove(id: number) {
    try {
      return await this.prisma.reuniao.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Reunião com ID ${id} não encontrada para exclusão.`);
        }
      }
      throw error;
    }
  }

  private async validarSalaExiste(salaId: number) {
    const sala = await this.prisma.sala.findUnique({
      where: { id: salaId },
    });

    if (!sala) {
      throw new NotFoundException(`Sala com ID ${salaId} não encontrada.`);
    }
  }

  private validarDatas(inicio: Date | string, fim: Date | string) {
    const dataInicio = new Date(inicio);
    const dataFim = new Date(fim);

    if (dataInicio >= dataFim) {
      throw new BadRequestException('O horário de fim deve ser depois do horário de início.');
    }
  }

  private async validarConflito(inicio: Date | string, fim: Date | string, salaId: number, ignorarReuniaoId?: number) {
    const dataInicio = new Date(inicio);
    const dataFim = new Date(fim);

    const conflito = await this.prisma.reuniao.findFirst({
      where: {
        salaId: salaId,
        AND: [
          { id: { not: ignorarReuniaoId } },
          { inicio: { lt: dataFim } },
          { fim: { gt: dataInicio } },
        ],
      },
    });

    if (conflito) {
      throw new BadRequestException('Já existe uma reunião agendada neste horário para esta sala.');
    }
  }
}