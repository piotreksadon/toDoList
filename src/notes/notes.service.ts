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
    private notesRepository: Repository<Note>,
  ) {}


  create(noteData: any) {
      const model = new Note
      model.noteContent = noteData.note
    return this.notesRepository.save(model);
  }

  findAll() {
    return this.notesRepository.find({
    });
  }

  findOne(id: number) {
    return this.notesRepository.findOne(+id);
  }

  update(id: number, noteUpdate: UpdateNoteDto) {
    return this.notesRepository.save({
      id: id,
      yourNote: noteUpdate.noteContent,
    });
  }

  remove(id: number) {
    return this.notesRepository.delete(id);
  }
}


