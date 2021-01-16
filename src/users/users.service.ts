import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'New user has been added.';
  }

  findAll() {
    return `Here are all users:`;
  }

  findOne(id: number) {
    return `Here is #${id} id user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `User #${id} is now up to date`;
  }

  remove(id: number) {
    return `User #${id} is now removed.`;
  }
}

