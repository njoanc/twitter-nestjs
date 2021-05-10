import { Module } from '@nestjs/common';
// import * as dotenv from 'dotenv';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // [REQUIRED if want to use env gloablly among all modules]
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: process.env.TYPEORM_HOST,
        port: parseInt(process.env.TYPEORM_PORT, 10),
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        synchronize: false,
        migrations: [process.env.TYPEORM_MIGRATIONS],
        cli: {
          migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
        },
        logging: process.env.TYPEORM_LOGGING === 'true' ? true : false,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
