import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { Auth0Strategy } from 'src/guard/auth0-ad.strategy';

@Module({
  imports: [PassportModule],
  providers: [Auth0Strategy],
})
export class AuthModule {}
