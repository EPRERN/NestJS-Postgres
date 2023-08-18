import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('api/tasks')
export class TasksController {

    // http://localhost:3000/api/tasks/filter
    @Get('filter')
    getAll(){
        return [1,2,3];
    }


    // http://localhost:3000/api/tasks/22
    @Get(':id')
    getOne(@Param('id') id: number){
        return id;

    }

    // desde postman:
    // http://localhost:3000/api/tasks/
    /**
     * body: (EN FORMATO JSON)
     * {
     * "name": "nueva tarea 3"
     * }
     */
    @Post()
    create(@Body() body:any){
        return body;
    }


    @Put(':id')
    update(@Param('id') id: number, @Body() body:any){
        return body;
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return true; 
    }
}
