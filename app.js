import express, { application } from "express";
import  affirmationsRouter  from "./router/router.js";
import blogsRouter from "./router/blogsRouter.js";
const app = express();
const PORT = process.env.port || 3001;
import pg from 'pg';
//attempting to import cors package in ES6 module
// const cors = { cors }; 
import { pool } from './db/index.js';
import { query } from './db/index.js';


//Connecting to the database through node-posgres connection pool
// (async () => {
//   try {
//     const client = await pool.connect();
//     const res = await client.query(query);
//     console.log('Connected!!!')

//     for (let row of res.rows) {
//       console.log(row);
//     }
//   } catch (err) {
//     console.error(err);
//   }
// })();

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

//doesn't work because cors package hasn't been properly imported
// app.use(cors())
app.use('/mindactivity', affirmationsRouter)
app.use("/blogs", blogsRouter);
app.use('/mindactivity/<id>', affirmationsRouter)
app.use(express.json());

//test get request
app.get('/api', (req, res) => {
  res.json({message: 'Hello from the server!'});
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

export default app;