import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Connection } from 'typeorm';
import { User } from './users/entities/user.entity';
import { UsersController } from './users/users.controller';
import { NewsletterService } from './newsletter/newsletter.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'todolist',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService, NewsletterService],
})
export class AppModule { }
