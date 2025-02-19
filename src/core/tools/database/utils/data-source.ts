import { commonDataSourceOptions } from '@app/core/config/database/type-orm.config';
import { Task } from '@modules/shared/schemas/task.schema';
import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
dotenv.config();

export const AppDataSource = new DataSource({
  ...commonDataSourceOptions,
  entities: [
    Task,
    //<Add new entities here>,
  ],
  migrationsTableName: 'typeorm_migrations',
  migrations: [
    //? Add migrations here whit the following format:
    //? ./src/core/database/seed/<migration-file-name>.ts
  ],
});
