import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './entities/notes.entity';
import { NotesController } from './notes.controller';
import { Debt } from './cheat-sheet'

@Module({
  imports: [TypeOrmModule.forFeature([Note])],
  controllers: [NotesController],
  providers: [NotesService],
  exports: [NotesService]
})
export class NotesModule {}