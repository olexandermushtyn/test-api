import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes
} from '@nestjs/common'
import { ValidationPipe } from 'src/pipes/validation.pipe'
import { CreateUserDto } from './dto/create-user.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.create(userDto)
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.userService.findOne(id)
  }

  @Get()
  getAll() {
    return this.userService.findAll()
  }

  @Put('/:id')
  updateOne(@Param('id') id: string, @Body() userDto: CreateUserDto) {
    return this.userService.update(id, userDto)
  }
}
