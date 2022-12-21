import express from "express";
import { trending, Search } from "./controllers/videosControllers";
import { join, Login } from "./controllers/usersControllers";


const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", Login);
globalRouter.get("/search", Search);

export default globalRouter