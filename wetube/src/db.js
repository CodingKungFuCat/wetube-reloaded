import mongoose from "mongoose"

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1:27017/wetube");
const db = mongoose.connection;
const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log(" DB Error", error);

db.on("error", handleError); //에러가 났음을 알려준다.
db.once("open", handleOpen)



// mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// const handleOpen = () => console.log("✅ Connected to DB");
// const handleError = (error) => console.log("❌ DB Error", error);

// db.on("error", handleError);
// db.once("open", handleOpen);