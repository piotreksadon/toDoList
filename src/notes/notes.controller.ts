import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UpdateNoteDto } from './dto/update-note.dto';
import { CreateNoteDto } from './dto/create-note.dto';
import { NotesService } from './notes.service';
import { Debt } from './cheat-sheet';



@Controller('v1/notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Post()
  create(@Body() data: any) {
      console.log(data)
    return this.notesService.create(data);
  }

  @Post('debt')
  test(@Body() data: CreateNoteDto){
    const userFee: Debt = {
        userName: data.userName,
        userSecName: data.userSecName,
        userLastName: data.userLastName,
        howMuchHeOwes: (amount) => {
            return `${userFee.userName} owes ${amount} zł.`
        }
    }
    console.log(userFee.howMuchHeOwes(300))
    console.log(userFee)
    return userFee
  } 
  

  @Get()
  findAll(){
    return this.notesService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: {id: string}) {
    return this.notesService.findOne(+params.id);
  }

  @Put('put/:id')
  update(@Param() params: {id:string}, @Body() body: UpdateNoteDto) {
    return this.notesService.update(+params.id, body);
  }

  @Delete('v1/notes/:id')
  remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
}
