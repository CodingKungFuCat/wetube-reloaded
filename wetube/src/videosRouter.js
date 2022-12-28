import express from "express";
import { postEdit, getEdit, watch, getUpload, postUpload } from "./controllers/videosControllers";

const vidoesRouter = express.Router();




vidoesRouter.get("/:id(\\d+)", watch);
vidoesRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
vidoesRouter.route("/upload").get(getUpload).post(postUpload);

export default vidoesRouter