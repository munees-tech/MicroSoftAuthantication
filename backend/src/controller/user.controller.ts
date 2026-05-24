import { Request, Response } from "express";

export const LoginSuccessController = async (req: Request, res: Response) => {
  try {
    const user = req.user as any;
    res.redirect(`https://fabulous-fox-079da9.netlify.app/home.html`);
  } catch (error) {
    res.status(500).send(`MicroSoft Login Success ${error}`);
    console.log(`Error in LoginSuccess ${error}`);
  }
};

export const LoginFaildController = async (req: Request, res: Response) => {
  try {
    res.status(200).send({
      success: false,
      message: "Microsoft Login Faild",
    });
  } catch (error) {
    res.status(500).send(`MicroSoft Login Faild ${error}`);
    console.log(`Error in LoginSuccess ${error}`);
  }
};

export const getMeController = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(404).json({ message: "unautharized" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(`getMeController ${error}`);
    console.log(`Error in getMeController ${error}`);
  }
};

export const LogoutController = async (req: Request, res: Response) => {
  try {
    req.session.destroy((err) => {
      if(err) return  res.status(400).json({ message: "Logout Error" })
      res.clearCookie("connect.sid");
      res.status(200).json({ message: "Logout Succesfully" });
    });
  } catch (error) {
    res.status(500).send(`LogoutController ${error}`);
    console.log(`Error in LogoutController ${error}`);
  }
};
