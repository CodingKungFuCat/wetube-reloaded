import express from "express";
import { join, edit, remove } from "./controllers/usersControllers";

const usersRouter = express.Router();

usersRouter.get("/join", join);
usersRouter.get("/edit", edit);
usersRouter.get("/remove", remove);

export default usersRouter