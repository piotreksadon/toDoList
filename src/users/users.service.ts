import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  
  create(data: CreateUserDto) {
    return this.usersRepository.save({
      firstName: data.name,
      lastName: data.surname
    });
  }

  findAll() {
    return this.usersRepository.find({
    });
  }

  findOne(id: number) {
    return this.usersRepository.findOne(+id);
  }

  update(id: number, body: UpdateUserDto) {
    return this.usersRepository.save({
      id: id,
      firstName: body.firstName,
      lastName: body.lastName
    });
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}

