import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableAddress1696552758017 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `CREATE TABLE "address" (
        "id" SERIAL,
        "user_id" integer NOT NULL,
        "complement" character varying,
        "number" integer NOT NULL,
        "cep" character varying NOT NULL,
        "city_id" integer NOT NULL,
        "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        primary key ("id"),
        foreign key ("user_id") references "user" ("id"),
        foreign key ("city_id") references "city" ("id")
      );
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "address"`);
  }
}
