import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class ReplyTable1620378141541 implements MigrationInterface {
  private replyTable = new Table({
    name: 'replies',
    columns: [
      {
        name: 'id',
        type: 'INTEGER',
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
        name: 'tweet_id',
        type: 'INTEGER',
        isNullable: false,
      },
      {
        name: 'reply',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
    ],
  });
  private foreignKey = new TableForeignKey({
    columnNames: ['user_id', 'tweet_id'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'users',
  });
  private tweetForeignKey = new TableForeignKey({
    columnNames: ['tweet_id'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'tweets',
  });
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.replyTable);
    await queryRunner.createForeignKey('replies', this.foreignKey);
    await queryRunner.createForeignKey('replies', this.tweetForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.replyTable);
  }
}
