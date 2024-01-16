import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async createUser() {
    return 'hello user';
  }
}
