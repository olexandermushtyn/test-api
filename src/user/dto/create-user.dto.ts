import { IsString } from 'class-validator'

export class CreateUserDto {
  @IsString({ message: 'Username should be a string' })
  readonly username: string
  @IsString({ message: 'Group id should be a string' })
  readonly groupId: string
}
