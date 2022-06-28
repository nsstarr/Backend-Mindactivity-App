import express from "express";
const blogsRouter = express.Router();

//blogs GET request 

import { getBlogs } from "../models/blogModels.js";

blogsRouter.get("/", async function (req, res) {
const result = await getBlogs();
console.log(result)
return res.json({
sucess: true,
payload: result,
});
});

export default blogsRouter