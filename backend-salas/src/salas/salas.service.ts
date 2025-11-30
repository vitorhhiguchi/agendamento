import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class SalasService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateSalaDto) {
    return this.prisma.sala.create({ data });
  }

  findAll() {
    return this.prisma.sala.findMany({
      include: { reunioes: true },
    });
  }

async findOne(id: number) {
    const sala = await this.prisma.sala.findUnique({
      where: { id },
      include: { reunioes: true },
    });

    if (!sala) {
      throw new NotFoundException(`Sala com ID ${id} não encontrada.`);
    }

    return sala;
  }

  async update(id: number, data: UpdateSalaDto) {
    try {
      return await this.prisma.sala.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // P2025 é o código para "Registro não encontrado"
        if (error.code === 'P2025') {
          throw new NotFoundException(`Sala com ID ${id} não encontrada para atualização.`);
        }
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.sala.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Sala com ID ${id} não encontrada para exclusão.`);
        }
      }
      throw error;
    }
  }
}
