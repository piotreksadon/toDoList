import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @Get()
  findAll(){
    return this.usersService.findAll();
  }

  @Get('asd/:id')
  findOne(@Param() params: {id: string}) {
    console.log(params)
    return this.usersService.findOne(+params.id);
  }

  @Put('put/:id')
  update(@Param() params: {id:string}, @Body() body: UpdateUserDto) {
    return this.usersService.update(+params.id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
