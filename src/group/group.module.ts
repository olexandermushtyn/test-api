import { Group } from './group.entity'
import { GroupController } from './group.controller'
import { GroupService } from './group.service'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  controllers: [GroupController],
  providers: [GroupService],
  imports: [TypeOrmModule.forFeature([Group])]
})
export class GroupModule {}
