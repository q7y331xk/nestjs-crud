import { ResponseSuccessJson, ResponseErrorJson } from './../shared/types';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseJson } from 'src/shared/types';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<ResponseJson> {
    try {
      const userNew = this.userRepository.create(createUserDto);
      const userSaved = await this.userRepository.save(userNew);
      return new ResponseSuccessJson(userSaved);
    } catch (err) {
      return new ResponseErrorJson(err);
    }
  }

  async findAll() {
    try {
      const usersExist = await this.userRepository.find();
      return new ResponseSuccessJson(usersExist);
    } catch (err) {
      return new ResponseErrorJson(err);
    }
  }

  async findOne(id: number) {
    try {
      const userExist = await this.userRepository.findOne({ where: { id } });
      return new ResponseSuccessJson(userExist);
    } catch (err) {
      return new ResponseErrorJson(err);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const userExist = await this.userRepository.findOne({ where: { id } });
      if (!userExist) {
        throw ['no user exist', 404];
      }
      const userUpdate = await this.userRepository.update(
        userExist,
        updateUserDto,
      );
      return new ResponseSuccessJson(userUpdate);
    } catch (err) {
      return new ResponseErrorJson(...err);
    }
  }

  async remove(id: number) {
    try {
      const userExist = await this.userRepository.findOne({ where: { id } });
      if (!userExist) {
        throw ['no user exist', 404];
      }
      const userRemoved = await this.userRepository.remove(userExist);
      return new ResponseSuccessJson(userRemoved);
    } catch (err) {
      return new ResponseErrorJson(err);
    }
  }
}
