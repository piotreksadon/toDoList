import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UpdateNoteDto } from './dto/update-note.dto';
import { CreateNoteDto } from './dto/create-note.dto';
import { NotesService } from './notes.service';


@Controller('v1/notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  create(@Body() body: CreateNoteDto) {
    return this.notesService.create(body);
  }

  @Get()
  findAll(){
    return this.notesService.findAll();
  }

  @Get('v1/notes/:id')
  findOne(@Param() params: {id: string}) {
    return this.notesService.findOne(+params.id);
  }

  @Put('v1/notes/put/:id')
  update(@Param() params: {id:string}, @Body() body: UpdateNoteDto) {
    return this.notesService.update(+params.id, body);
  }

  @Delete('v1/notes/:id')
  remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
}
