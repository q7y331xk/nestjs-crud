import { ResponseSuccessJson, ResponseErrorJson } from './../shared/types';
import { Repository } from 'typeorm';
import { Injectable, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseJson, RetMsg } from 'src/shared/types';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
    ) {}

  async create(createUserDto: CreateUserDto): Promise<ResponseJson>{
    try {
      const userNew = this.userRepository.create(createUserDto);
      const userSaved = await this.userRepository.save(userNew);
      return new ResponseSuccessJson(userSaved)
    } catch(err) {
      return new ResponseErrorJson(err)
    }
  }

  async findAll() {
    try {
      const usersExist = await this.userRepository.find();
      return new ResponseSuccessJson(usersExist);
    } catch(err) {
      return new ResponseErrorJson(err)
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
