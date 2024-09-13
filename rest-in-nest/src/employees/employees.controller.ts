import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { SkipThrottle,Throttle } from '@nestjs/throttler';
import { Prisma } from '@prisma/client';


@SkipThrottle()
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: Prisma.EmployeeCreateInput) {}

  @Post()
  create(@Body() createEmployeeDto: EmployeeCreateInput) {
    return this.employeesService.create(createEmployeeDto);
  }

  @SkipThrottle({default: false}) // reenabling throttling for this route
  @Get(@Query("role") role?:   "intern" |  "engineer")
  findAll() {
    return this.employeesService.findAll();
  }

  // @Throttle({
  //   short:{
  //     ttl: 60,
  //     limit: 10,
    
  //   }
  // })
  @Throttle({
    default:{
      ttl: 3600,
      limit: 100,}
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.employeesService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(+id);
  }
}
