import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCity1696552736870 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `CREATE TABLE "city" (
        "id" SERIAL,
        "state_id" integer NOT NULL,
        "name" character varying NOT NULL,
        "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        primary key ("id"),
        foreign key ("state_id") references "state" ("id")
      );
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "city"`);
  }
}
