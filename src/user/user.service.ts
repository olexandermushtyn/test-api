import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from './user.entity'
import { CreateUserDto } from './dto/create-user.dto'
import { Group } from 'src/group/group.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find({ relations: ['group'] })
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id, { relations: ['group'] })
  }

  async create(dto: CreateUserDto): Promise<User> {
    const group = await Group.findOne(dto.groupId)
    const user = this.usersRepository.create({ username: dto.username, group })
    await this.usersRepository.save(user)
    return user
  }

  async update(id: string, dto: CreateUserDto): Promise<any> {
    const group = await Group.findOne(dto.groupId)
    const user = {
      username: dto.username,
      group
    }
    return this.usersRepository.update(id, user)
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id)
  }
}
