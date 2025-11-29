import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';

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

  findOne(id: number) {
    return this.prisma.sala.findUnique({
      where: { id },
      include: { reunioes: true },
    });
  }

  update(id: number, data: UpdateSalaDto) {
    return this.prisma.sala.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.sala.delete({
      where: { id },
    });
  }
}
