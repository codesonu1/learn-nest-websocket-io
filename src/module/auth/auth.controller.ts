import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/user')
  async createUser() {
    return await this.authService.createUser();
  }
}
