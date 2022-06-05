import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll(): string[] {
    return ['jones', 'mind'];
  }

  getUserById(id: string): string {
    if (id) return 'khan dep choir';
  }
}
