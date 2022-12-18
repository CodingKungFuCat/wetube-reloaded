import express from "express";
import nodemon from "nodemon";

const app = express();
const PORT = 4000;
const handleHome = (req, res) => console.log("somebody is going to go home");
app.get("/", () => handleHome);

app.listen(PORT, () => console.log(`Server Listening on port http://localhost:${PORT}`))
