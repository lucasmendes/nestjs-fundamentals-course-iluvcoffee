import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1608474518738 implements MigrationInterface {
  name = 'SchemaSync1608474518738';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "coffee" ADD "description" character varying`);
    await queryRunner.query(`ALTER TABLE "coffee" ADD "recommendations" integer`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description"`);
    await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "recommendations"`);
  }
}
