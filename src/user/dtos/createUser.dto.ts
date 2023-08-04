/* dto recebe as informações que o usuário envia */

export interface CreateUserDto {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  password: string;
}
