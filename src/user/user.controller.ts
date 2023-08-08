// import { Controller, Get } from '@nestjs/common';
import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
  /* Retorna o JSON de todos os usuários */
  // @Get()
  // async getAllUsers() {
  //   return JSON.stringify([{ name: 'Meg' }, { name: 'Ralf' }]);
  // }

  constructor(private readonly userService: UserService) {}

  // @Post()
  // async createUser(@Body() createUser: CreateUserDto) {
  //   /* Retorna todos os dados que o usuário enviou e no campo password retorna a string (independente do que o usuário tenha digitado) */
  //   return {
  //     ...createUser,
  //     password: 'Senha criptografada 🔐',
  //   };
  // }

  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<User> {
    /* Conectando esse controller ao service de createUser */
    return this.userService.createUser(createUser);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
}
