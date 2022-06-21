import express from "express";
import  affirmationsRouter  from "./router/router.js";
const app = express();
const PORT = process.env.port || 3000;

app.use('/mindactivity', affirmationsRouter)
app.use('/mindactivity/<id>', affirmationsRouter)
app.use(express.json());

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});