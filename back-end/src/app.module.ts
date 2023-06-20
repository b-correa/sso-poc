import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PassportModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
