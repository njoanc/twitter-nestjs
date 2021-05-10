import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class TweetTable1620378129258 implements MigrationInterface {
  private tweetTable = new Table({
    name: 'tweets',
    columns: [
      {
        name: 'id',
        type: 'int4',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'user_id',
        type: 'INTEGER',
        isNullable: false,
      },
      {
        name: 'tweet',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
    ],
  });
  private foreignKey = new TableForeignKey({
    columnNames: ['user_id'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'users',
  });
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.tweetTable);
    await queryRunner.createForeignKey('tweet_id', this.foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.tweetTable);
  }
}
