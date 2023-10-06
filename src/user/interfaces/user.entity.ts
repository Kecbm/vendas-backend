/* Na interface nós temos os dados para salvar no BD */

// export interface User {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   cpf: string;
//   password: string;
// }

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// OBS.: apagar a tabela user do BD antes de iniciar a aplicação (ao iniciar ela cria a nova tabela)

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'phone' })
  phone: string;

  @Column({ name: 'cpf', nullable: false })
  cpf: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'type_user', nullable: false })
  typeUser: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
