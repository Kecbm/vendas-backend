import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private users: User[] = [];

  /* Agora no retorno o usuário tem os dados que ele enviou e também o id: 1 */
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    /* Criptografando a senha do usuário */
    const saltOrRounds = 10;

    const passwrodHashed = await hash(createUserDto.password, saltOrRounds);

    // console.log('passwrodHashed: ', passwrodHashed);

    const user: User = {
      ...createUserDto,
      id: this.users.length + 1,
      password: passwrodHashed,
    };

    this.users.push(user);

    // return {
    //   ...createUserDto,
    //   id: 1,
    // };

    return user;
  }

  /* Retornando todos os usuários cadastrados */
  async getAllUsers(): Promise<User[]> {
    return this.users;
  }
}
