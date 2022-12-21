import express from "express";
import { trending } from "./controllers/videosControllers";
const globalRouter = express.Router();

export default globalRouter.get("/", trending);