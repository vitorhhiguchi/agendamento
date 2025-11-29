import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { SalasModule } from './salas/salas.module';
import { ReunioesModule } from './reunioes/reunioes.module';

@Module({
  imports: [PrismaModule, SalasModule, ReunioesModule],
})
export class AppModule {}
