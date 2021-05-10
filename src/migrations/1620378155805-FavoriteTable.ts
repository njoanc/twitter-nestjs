import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class FavoriteTable1620378155805 implements MigrationInterface {
  private favoriteTable = new Table({
    name: 'favorites',
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
    ],
  });
  private userForeignKey = new TableForeignKey({
    columnNames: ['user_id'],
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
    await queryRunner.createTable(this.favoriteTable);
    await queryRunner.createForeignKey('favorites', this.userForeignKey);
    await queryRunner.createForeignKey('favorites', this.tweetForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.favoriteTable);
  }
}
