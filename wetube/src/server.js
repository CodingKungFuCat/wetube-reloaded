import express from "express";
import nodemon from "nodemon";

const app = express();
const PORT = 4000;
const handleLogin = (req, res) => {
    return res.send("Login Here")
}
const handleHome = (req, res) => {
    return res.end();
};

app.get("/", handleHome);
app.get("/login", handleLogin)
app.listen(PORT, () => console.log(`Server Listening on port http://localhost:${PORT}`))
