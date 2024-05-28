import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models/user.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/generic'),
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
    ]),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
