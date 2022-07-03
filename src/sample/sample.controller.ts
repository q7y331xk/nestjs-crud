import { SampleService } from './sample.service';
import { Body, Controller, Delete, Get, Head, Header, Param, Patch, Post } from "@nestjs/common";

@Controller('sample')
export class SampleController {
  constructor(
    private readonly sampleService: SampleService
  ) {}

  @Post()
  craete(@Body() create) {
    try {

    } catch(err) {

    }
  }
  
  @Get()
  findAll() {
    try {
      
    } catch(err) {

    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      
    } catch(err) {

    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() update) {
    try {
      
    } catch(err) {

    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      
    } catch(err) {

    }
  }
}