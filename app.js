import express, { application } from "express";
import path from "path";
import logger from "morgan";
import __dirname from "./dirname.js";
import cookieParser from "cookie-parser";
import affirmationsRouter from "./router/affirmationRouter.js";
import blogsRouter from "./router/blogsRouter.js";
const app = express();
import cors from 'cors';
// import sslRedirect from "heroku-ssl-redirect";

// //CORS
// app.use((req, res, next) => {
//   //Website you wish to allow to connect
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");

//   //Set to true if you need the website to include cookies in the requests sent
//   res.setHeader("Access-Control-Allow-Credentials", true);

//   // Request headers you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Control-Type, Accept"
//   );
//   // Request methods you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "POST, PUT, DELETE, OPTIONS, GET"
//   );
//   next();
// });

// app.use(sslRedirect());
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//middleware

//v1 displays the version number of this app, potentially can be placed at the start of root path
app.use("/v1/mindactivity", affirmationsRouter);
app.use("/v1/blogs", blogsRouter);
app.use(express.json());

//test get request
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
