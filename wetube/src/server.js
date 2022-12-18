import express from "express";
import nodemon from "nodemon";

const app = express();
const PORT = 4000;

app.listen(PORT, () => console.log(`Server Listening on port http://localhost:${PORT}`))
