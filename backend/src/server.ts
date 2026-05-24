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

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;

app.use(
  cors({
    origin: "https://fabulous-fox-079da9.netlify.app",
    credentials: true,
  }),
);

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
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
