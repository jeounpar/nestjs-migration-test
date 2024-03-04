import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'test',
  password: '1234',
  database: 'test_db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/**/migrations/*.ts'],
  migrationsTableName: 'migrations',
});

// AppDataSource.initialize()
//   .then(() => {
//     console.log('Data Source has been initialized!');
//   })
//   .catch((err) => {
//     console.error('Error during Data Source initialization', err);
//   });
