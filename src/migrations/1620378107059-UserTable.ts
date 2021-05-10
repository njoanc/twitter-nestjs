import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UserTable1620378107059 implements MigrationInterface {
  private userTable = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'INTEGER',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'username',
        type: 'varchar',
        length: '255',
        isNullable: false,
        isUnique: true,
      },
      {
        name: 'email',
        type: 'varchar',
        length: '255',
        isNullable: false,
        isUnique: true,
      },
      {
        name: 'password',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'location',
        type: 'varchar',
        length: '255',
        isNullable: true,
      },
      {
        name: 'website_url',
        type: 'varchar',
        length: '255',
        isNullable: true,
      },
      {
        name: 'bio',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
    ],
  });
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.userTable);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.userTable);
  }
}
