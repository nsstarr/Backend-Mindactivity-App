import express from "express";
const affirmationsRouter = express.Router();

//GET REQUEST ROUTER 

import { getAffirmations } from "../models/affirmationsModels.js";
affirmationsRouter.get("/", async function (req, res) {
const result = await getAffirmations ();
return res.json({
success: true,
payload: result,
});
});

//GET REQUEST AFFIRMATION BY ID

import { getAffirmationsById } from "../models/affirmationsModels.js";
affirmationsRouter.get("/:id", async function (req, res) {
    const id = Number(req.params.id);
    const affirmationsResult = await getAffirmationsById(id);
    return res.json({
    success: true,
    payload: affirmationsResult,
    });
    });
//DELETE REQUEST import express from "express";
 
import { deleteAffirmationById } from "../models/affirmationsModels.js";
affirmationsRouter.delete("/:id", async function (req,res) {
    const id = Number(req.params.id);
    const affirmationDelete = await deleteAffirmationById(id);
    return res.json({
        success: true,
        payload: affirmationDelete,
    });
});

//blogs GET request 

// import { getBlogs } from "../models/models.js";

// affirmationsRouter.get("/blogs", async function (req, res) {
// const result = await getBlogs();
// console.log(result)
// return res.json({
// sucess: true,
// payload: result,
// });
// });


export default affirmationsRouter;

