import express from "express";
import { postEdit, getEdit, watch, Upload, Delete } from "./controllers/videosControllers";

const vidoesRouter = express.Router();




vidoesRouter.get("/:id(\\d+)", watch);
vidoesRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);

export default vidoesRouter