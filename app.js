import express from "express";
import  affirmationsRouter  from "./router/router.js";
const app = express();
const PORT = process.env.port || 3001;
const path = require("path");

//Have Node serve the files for our built React app below 
//app.use(express.static(path.resolve(__dirname, '../mindactivity-app/build')));

//middleware
app.use('/mindactivity', affirmationsRouter)
app.use('/mindactivity/<id>', affirmationsRouter)
app.use(express.json());

//test get request
app.get('/api', (req, res) => {
  res.json({message: 'Hello from the server!'});
});


// All other GET requests not handled before will return our React app below
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../mindactivity-app/build', 'index.html'));
// });

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});