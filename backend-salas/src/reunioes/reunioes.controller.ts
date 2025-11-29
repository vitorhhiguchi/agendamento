import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReunioesService } from './reunioes.service';
import { CreateReuniaoDto } from './dto/create-reuniao.dto';
import { UpdateReuniaoDto } from './dto/update-reuniao.dto';

@Controller('reunioes')
export class ReunioesController {
  constructor(private readonly reunioesService: ReunioesService) {}

  @Post()
  create(@Body() createReunioeDto: CreateReuniaoDto) {
    return this.reunioesService.create(createReunioeDto);
  }

  @Get()
  findAll() {
    return this.reunioesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reunioesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReunioeDto: UpdateReuniaoDto) {
    return this.reunioesService.update(+id, updateReunioeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reunioesService.remove(+id);
  }
}
