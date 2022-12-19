import express from "express";
import nodemon from "nodemon";

const app = express();
const PORT = 4000;
const handleLogin = (req, res) => {
    return res.send("Login Here")
}
// 중간에 있는 소프트웨어를 미들 웨어라고 한다. 미들에워 = controller = handler 미들웨어는 res와 req사이에 존재한다. next 함수
//에 의해 다음 함수가 호출되는데 그렇게 호출되는 함수들 과정 과정들이 전부 미들웨어다. 마지막 웨어는 파이널 웨어이다.
// middleware는 req가 이뤄지고 res가 도착하기 전에 작동하는 함수기 때문에 서버를 열지 않으면 요청이 없어서 작동되지 않는다. 
//middleware는 req와 res 중간과정에서 작동되는 함수기 때문에 res를 해주면 미들웨어가 아니다.
// const handleLogin = (req, res, next ) => {
//     next()  next는 다음 함수 즉 아래의 코드에 오는 함수들을 호출해준다.
// } 
const handleHome = (req, res) => {
    return res.send("I love middleware")

};

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next();
    // next는 30번째 코드에 있는 gossipMiddleWare 다음에 나오는 handleHome 즉 다음 함수가 작동되게 해준다 => 동기화방식
    //그렇기 때문에 next를 빼주면 gossipMiddleware만 작동된다.
};

const privateMiddleWare = (req, res) => {
    return res.send("여기는 비밀의 방이야")
};

const protector = (req, res, next) => {
    const url = req.url
    if (url === "/protected") {
        console.log("허용되지 않는 페이지 입니다.")
        res.send("허용되지 않은 페이지 입니다.")
    } else {
        console.log("허용되는 페이지 입니다.")
        next();
    }
}

// protected  된 페이지를 들어가려고 하면 if 문에 의해 들어갈 수 없고 아닌 경우 허용됨이 표시되게 하기
app.use(logger)
app.use(protector)
app.get("/", handleHome);
app.get("/login", handleLogin)
app.get("/protected", privateMiddleWare)
app.listen(PORT, () => console.log(`Server Listening on port http://localhost:${PORT}`))
