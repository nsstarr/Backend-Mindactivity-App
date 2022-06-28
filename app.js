import express, { application } from "express";
import  affirmationsRouter  from "./router/affirmationRouter.js";
import blogsRouter from "./router/blogsRouter.js";
const app = express();
const PORT = process.env.port || 3001;


//CORS 
app.use((req, res, next) => {
  //Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  //Set to true if you need the website to include cookies in the requests sent
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Control-Type, Accept"
  );
  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, DELETE, OPTIONS, GET");
  next();
});

app.use(express.urlencoded({ extended: false }));


//middleware

//v1 displays the version number of this app, potentially can be placed at the start of root path
app.use('/mindactivity/v1', affirmationsRouter)
app.use("/blogs/v1", blogsRouter);
app.use(express.json());

//test get request
app.get('/api', (req, res) => {
  res.json({message: 'Hello from the server!'});
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

export default app;