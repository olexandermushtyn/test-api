import { IsString } from 'class-validator'

export class CreateGroupDto {
  @IsString({ message: 'Name should be a string' })
  readonly name: string
  @IsString({ message: 'Description should be a string' })
  readonly description: string
}
