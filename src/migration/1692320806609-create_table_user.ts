import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1692320806609 implements MigrationInterface {
  /* Aqui cria uma tabela no BD */
  public async up(queryRunner: QueryRunner): Promise<void> {
    // id definido como SERIAL para gerar automaticamente os IDs
    await queryRunner.query(
      `CREATE TABLE "user" (
        "id" SERIAL,
        "name" character varying NOT NULL,
        "email" character varying NOT NULL,
        "cpf" character varying NOT NULL,
        "type_user" integer NOT NULL,
        "phone" character varying NOT NULL,
        "password" character varying NOT NULL,
        "created_at" timestamp NOT NULL,
        "updated_at" timestamp NOT NULL,
        CONSTRAINT "PK_58a149c4e88bf49036bc4c8c79f" PRIMARY KEY ("id")
      )`,
    );
  }

  /* E aqui deleta a tabela do BD */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }

  /* ESTOU EM: Seção 3 - Aula 20 - 5:38 min */
}
