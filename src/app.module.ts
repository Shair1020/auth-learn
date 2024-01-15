import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./users/users.module";
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://ali99shair:alirafi99@cluster0.60hzdra.mongodb.net/auth-learn?retryWrites=true&w=majority",
    ),
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

