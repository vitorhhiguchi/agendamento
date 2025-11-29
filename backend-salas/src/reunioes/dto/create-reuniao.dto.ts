import { IsString, IsInt, IsDateString } from 'class-validator';

export class CreateReuniaoDto {
  @IsString()
  nomeAluno: string;

  @IsDateString()
  inicio: string;

  @IsDateString()
  fim: string;

  @IsInt()
  salaId: number;
}
