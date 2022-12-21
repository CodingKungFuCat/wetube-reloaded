import express from "express";
import { join, edit, remove, Logout, see } from "./controllers/usersControllers";

const usersRouter = express.Router();


usersRouter.get("/logout", Logout)
usersRouter.get("/edit", edit);
usersRouter.get("/remove", remove);
usersRouter.get("/:id", see)


export default usersRouter