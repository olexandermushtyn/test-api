import { ConfigModule } from '@nestjs/config'
import { Group } from './group/group.entity'
import { GroupController } from './group/group.controller'
import { GroupModule } from './group/group.module'
import { GroupService } from './group/group.service'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user/user.entity'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [User, Group],
      synchronize: true,
      autoLoadEntities: true
    }),
    UserModule,
    GroupModule
  ]
})
export class AppModule {}
