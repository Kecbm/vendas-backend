import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUserDto } from './dtos/createUser.dto';
// import { User } from './interfaces/user.interface';
import { UserEntity } from './interfaces/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  /* Array de usuários para salvar informações hardcoded */
  // private users: User[] = [];

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    /* Criptografando a senha do usuário */
    const saltOrRounds = 10;

    const passwrodHashed = await hash(createUserDto.password, saltOrRounds);

    // console.log('passwrodHashed: ', passwrodHashed);

    // const user: UserEntity = {
    //   ...createUserDto,
    //   id: this.users.length + 1,
    //   password: passwrodHashed,
    // };

    // this.users.push(user);

    return this.userRepository.save({
      ...createUserDto,
      password: passwrodHashed,
    });

    /* Agora no retorno o usuário tem os dados que ele enviou e também o id: 1 */
    // return {
    //   ...createUserDto,
    //   id: 1,
    // };

    // return user;
  }

  /* Retornando todos os usuários cadastrados */
  async getAllUsers(): Promise<UserEntity[]> {
    // return this.users;
    return this.userRepository.find();
  }
}
