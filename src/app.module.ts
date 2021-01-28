import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { NewsletterService } from './newsletter/newsletter.service';
import { ScheduleModule } from '@nestjs/schedule';
import { NotesController } from './notes/notes.controller';
import { NotesService } from './notes/notes.service';
import { Note } from './notes/entities/notes.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'todolist',
      entities: [User, Note],
      synchronize: true,
      logging: true
    }),
    AuthModule,
    UsersModule,
    ScheduleModule.forRoot()
  ],
  controllers: [AppController, NotesController],
  providers: [AppService, NewsletterService, NotesService],
})
export class AppModule { }
