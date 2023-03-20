import { Controller, Get, Body, Post } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDo: CreateCatDto) {
    this.catsService.create(createCatDo);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
