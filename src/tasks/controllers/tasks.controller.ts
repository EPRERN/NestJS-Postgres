import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';

@Controller('api/tasks')
export class TasksController {

  constructor(private tasksService: TasksService) { }


    // desde postman:
  // http://localhost:3000/api/tasks/
  /**
   * body: (EN FORMATO JSON)
   * {
   * "name": "nueva tarea 3"
   * }
   */
  @Post()
  create(@Body() body: any) {
    return this.tasksService.create(body);
  }


  // http://localhost:3000/api/tasks/filter
  // @Get('filter')
  @Get()
  findAll() {
    return this.tasksService.findAll();
  }


  // http://localhost:3000/api/tasks/22
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tasksService.findOne(id);
  }


  // @Get(':edad')
  // BuscarEdad(@Param('edad') edad: number) {
  //   return this.tasksService.findPorEdad(edad);
  // }




  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.tasksService.update(id, body);
  }

  // @Put(':edad')
  // actualizarEdad(@Param('edad') edad:number, @Body() body:any){
  //   return this.tasksService.update(edad,body);
  // }


  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.tasksService.remove(id);
  }
}
