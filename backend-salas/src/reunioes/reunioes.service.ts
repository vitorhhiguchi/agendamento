import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReuniaoDto } from './dto/create-reuniao.dto';
import { UpdateReuniaoDto } from './dto/update-reuniao.dto';

@Injectable()
export class ReunioesService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateReuniaoDto) {
    return this.prisma.reuniao.create({ data });
  }

  findAll() {
    return this.prisma.reuniao.findMany({
      include: { sala: true },
    });
  }

  findOne(id: number) {
    return this.prisma.reuniao.findUnique({
      where: { id },
      include: { sala: true },
    });
  }

  update(id: number, data: UpdateReuniaoDto) {
    return this.prisma.reuniao.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.reuniao.delete({
      where: { id },
    });
  }
}
