import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): string[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUserById(@Param() param): string {
    return this.usersService.getUserById(param.id);
  }
}
