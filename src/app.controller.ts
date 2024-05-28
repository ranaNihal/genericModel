import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() data){
    data = {
      name:'nihal',
      email:"nihal@gmail.com",
      password:'123456'
    }
    console.log(data);
    
    return this.appService.create(data);
  }

  @Get()
  get() {
    return this.appService.get();
  }

  @Put()
  update() {
    return this.appService.update();
  }

  @Delete()
  delete() {
    return this.appService.delete();
  }
}
