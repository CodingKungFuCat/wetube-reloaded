import express from "express";
import { watch, edit } from "./controllers/videosControllers";

const vidoesRouter = express.Router();


vidoesRouter.get("/Watch", watch);
vidoesRouter.get("/edit", edit);

export default vidoesRouter