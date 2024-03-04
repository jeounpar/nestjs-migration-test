import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'test',
  password: '1234',
  database: 'test_db',
  entities: [
    /*...*/
  ],
  migrations: [
    /*...*/
  ],
  migrationsTableName: 'custom_migration_table',
  synchronize: false,
};

export const OrmConfig = {
  ...typeORMConfig,
  migrationsTableName: 'migrations',
  migrations: ['migrations/*.ts'],
  cli: {
    migrationsDir: 'migrations',
  },
};
export default OrmConfig;
