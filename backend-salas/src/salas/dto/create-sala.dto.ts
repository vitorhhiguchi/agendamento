import { IsInt, IsString } from 'class-validator';

export class CreateSalaDto {
  @IsString()
  nome: string;

  @IsInt()
  capacidade: number;
}
