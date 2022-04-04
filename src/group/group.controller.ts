import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { CreateGroupDto } from './dto/create-group.dto'
import { GroupService } from './group.service'

@Controller('groups')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() group: CreateGroupDto) {
    return this.groupService.create(group)
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.groupService.findOne(id)
  }

  @Get()
  getAll() {
    return this.groupService.findAll()
  }

  @Put('/:id')
  updateOne(@Param('id') id: string, @Body() groupDto: CreateGroupDto) {
    return this.groupService.update(id, groupDto)
  }
}
