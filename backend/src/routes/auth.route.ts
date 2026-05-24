import express, { Request, Response } from "express";
import passport from "passport";
import {
  getMeController,
  LoginFaild,
  LoginSuccess,
  LogoutController,
} from "../controller/user.controller";

const router = express.Router();

router.get(
  "/microsoft",
  passport.authenticate("microsoft", {
    prompt: "select_account",
  }),
);

router.get(
  "/microsoft/callback",
  passport.authenticate("microsoft", {
    failureRedirect: "/auth/faild",
  }),
  LoginSuccess,
);

router.get("/me", getMeController);

router.get("/faild", LoginFaild);

router.get("/logout", LogoutController);

export default router;
