import express from "express";
import { edit, see, Upload, Delete } from "./controllers/videosControllers";

const vidoesRouter = express.Router();




vidoesRouter.get("/:id(\\d+)", see);
vidoesRouter.get("/:id(\\d+)/edit", edit);
vidoesRouter.get("/:id(\\d+)/delete", Delete);
vidoesRouter.get("/upload", Upload);

export default vidoesRouter