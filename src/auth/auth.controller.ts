import { SignUpDto } from './dto/sign-up-dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogInDto } from './dto/log-in-dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  async signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto);
  }
  @Get('/login')
  async logIn(@Body() logInDto: LogInDto): Promise<{ token: string }> {
    return this.authService.logIn(logInDto);
  }
}
