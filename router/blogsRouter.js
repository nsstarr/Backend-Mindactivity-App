import express from "express";
const blogsRouter = express.Router();

//blogs GET request 

import { getBlogs } from "../models/blogModels.js";

blogsRouter.get("/", async function (req, res) {
const result = await getBlogs();
return res.json({
success: true,
payload: result,
});
});

export default blogsRouter