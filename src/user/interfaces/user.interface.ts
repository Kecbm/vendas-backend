/* Na interface nós temos os dados para salvar no BD */

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  password: string;
}
