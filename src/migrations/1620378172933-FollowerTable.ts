import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class FollowerTable1620378172933 implements MigrationInterface {
  private followerTable = new Table({
    name: 'followers',
    columns: [
      {
        name: 'user_id',
        type: 'INTEGER',
        isNullable: false,
      },
      {
        name: 'follower_id',
        type: 'INTEGER',
        isNullable: false,
      },
    ],
  });
  private userForeignKey = new TableForeignKey({
    columnNames: ['user_id'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'users',
  });
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.followerTable);
    await queryRunner.createForeignKey('followers', this.userForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.followerTable);
  }
}
