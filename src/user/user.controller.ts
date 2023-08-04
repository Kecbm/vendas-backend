// import { Controller, Get } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
  /* Retorna o JSON de todos os usuários */
  // @Get()
  // async getAllUsers() {
  //   return JSON.stringify([{ name: 'Meg' }, { name: 'Ralf' }]);
  // }

  @Post()
  async createUser(@Body() createuser: CreateUserDto) {
    return {
      ...createuser,
      password: 'Senha criptografada 🔐',
    };
  }
}
