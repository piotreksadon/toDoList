import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/notes.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private readonly notesRepository: Repository<Note>,
  ) {}
  
  create(noteData: CreateNoteDto) {
    const note = new Note()
    console.log(note)
    // return this.notesRepository.save({
    //   yourNote: noteData.noteContent,
    // });
  }

  findAll() {
    return this.notesRepository.find({
    });
  }

  findOne(id: number) {
    return this.notesRepository.findOne(+id);
  }

  update(id: number, noteBody: UpdateNoteDto) {
    return this.notesRepository.save({
      id: id,
      yourNote: noteBody.noteContent,
    });
  }

  remove(id: number) {
    return this.notesRepository.delete(id);
  }
}


