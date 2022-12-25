import express from "express"
import nodemon from "nodemon";
import morgan from "morgan"
import globalRouter from "./globalRouter";
import usersRouter from "./usersRouter";
import vidoesRouter from "./videosRouter";

const app = express();
const loggerMiddleWare = morgan("dev");
const PORT = 4000;


app.set("view engine", "pug")
app.set("views", process.cwd() + "/src/views")
app.use(loggerMiddleWare)
app.use("/", globalRouter)
app.use("/users", usersRouter)
app.use("/videos", vidoesRouter)
// const handleLogin = (req, res) => {
//     return res.send("Login Here")
// }
// 중간에 있는 소프트웨어를 미들 웨어라고 한다. 미들에워 = controller = handler 미들웨어는 res와 req사이에 존재한다. next 함수
//에 의해 다음 함수가 호출되는데 그렇게 호출되는 함수들 과정 과정들이 전부 미들웨어다. 마지막 웨어는 파이널 웨어이다.
// middleware는 req가 이뤄지고 res가 도착하기 전에 작동하는 함수기 때문에 서버를 열지 않으면 요청이 없어서 작동되지 않는다. 
//middleware는 req와 res 중간과정에서 작동되는 함수기 때문에 res를 해주면 미들웨어가 아니다.
// const handleLogin = (req, res, next ) => {
//     next()  next는 다음 함수 즉 아래의 코드에 오는 함수들을 호출해준다.
// } 
// const handleHome = (req, res) => {
//     return res.send("I love middleware")

// };




// protected  된 페이지를 들어가려고 하면 if 문에 의해 들어갈 수 없고 아닌 경우 허용됨이 표시되게 하기


app.listen(PORT, () => console.log(`Server Listening on port http://localhost:${PORT}`))
