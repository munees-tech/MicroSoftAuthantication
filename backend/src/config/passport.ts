import passport from "passport";
import { Strategy as MicrosoftStrategy } from "passport-microsoft";
import User from "../models/user.model";
import dotenv from "dotenv";

dotenv.config();

passport.use(
  new MicrosoftStrategy(
    {
      clientID: process.env.MICROSOFT_CLIENT_ID!,
      clientSecret: process.env.MICROSOFT_CLIENT_SECREATE!,
      callbackURL: process.env.CALLBACK_URL,
      scope: ["user.read"],
    },
    async (accessToken: any, refreshToken: any, profile: any, done: any) => {
      try {
        let user = await User.findOne({
          microsoftId: profile.id,
        });
        if (!user) {
          user = await User.create({
            microsoftId: profile.id,
            displayName: profile.displayName,
            email:profile.emails?.[0]?.value
          });
        }
        return done(null,user)
      } catch (error) {
        return done(error)
      }
    },
  ),
);
