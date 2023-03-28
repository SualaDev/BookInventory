import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/users.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { SignUpDto } from './dto/sign-up-dto';
import { LogInDto } from './dto/log-in-dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}
  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { name, email, password } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = await this.jwtService.sign({
      id: user._id,
    });
    return { token };
  }
  async logIn(logInDto: LogInDto): Promise<{ token: string }> {
    const { email, password } = logInDto;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const IsPasswordMatched = await bcrypt.compare(password, user.password);
    if (!IsPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const token = await this.jwtService.sign({ id: user._id });
    return { token };
  }
}
