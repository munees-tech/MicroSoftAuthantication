import express from "express";
import passport from "passport";
import {
  getMeController,
  LoginFaildController,
  LoginSuccessController,
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
  LoginSuccessController,
);

router.get("/me", getMeController);

router.get("/faild", LoginFaildController);

router.get("/logout", LogoutController);

export default router;
