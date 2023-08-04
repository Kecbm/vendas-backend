import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private users: User[] = [];

  /* Agora no retorno o usuário tem os dados que ele enviou e também o id: 1 */
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return {
      ...createUserDto,
      id: 1,
    };
  }

  //   ESTOU EM: seção - 3, aula - 17, 6:46 min
}
