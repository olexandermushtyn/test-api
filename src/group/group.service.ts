import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Group } from './group.entity'
import { Repository } from 'typeorm'
import { CreateGroupDto } from './dto/create-group.dto'

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>
  ) {}

  findAll(): Promise<Group[]> {
    return this.groupRepository.find()
  }

  findOne(id: string): Promise<Group> {
    return this.groupRepository.findOne(id)
  }

  async create(dto: CreateGroupDto): Promise<Group> {
    const group = this.groupRepository.create(dto)
    await this.groupRepository.save(group)
    return group
  }

  update(id: string, dto: CreateGroupDto) {
    return this.groupRepository.update(id, dto)
  }

  async remove(id: string): Promise<void> {
    await this.groupRepository.delete(id)
  }
}
