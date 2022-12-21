import express from "express";
import { edit, see, Upload, Delete } from "./controllers/videosControllers";

const vidoesRouter = express.Router();

vidoesRouter.get("/upload", Upload);
vidoesRouter.get("/:id", see);
vidoesRouter.get("/:id/edit", edit);
vidoesRouter.get("/:id/delete", Delete);



export default vidoesRouter