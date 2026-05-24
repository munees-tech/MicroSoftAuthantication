import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";

import "./config/passport";

import db from "./db/db";
import authRoute from "./routes/auth.route";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.set("trust proxy", 1);

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: "https://fabulous-fox-079da9.netlify.app",
    credentials: true,
  }),
);

app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",

    resave: false,

    saveUninitialized: false,

    cookie: {
      secure: true,

      sameSite: "none",

      httpOnly: true,

      maxAge: 1000 * 60 * 60 * 24,
    },
  }),
);

app.use(passport.initialize());

app.use(passport.session());

passport.serializeUser((user: any, done: any) => {
  done(null, user);
});

passport.deserializeUser((user: any, done: any) => {
  done(null, user);
});

app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);

  db();
});
