import express from "express";
const affirmationsRouter = express.Router();

//GET REQUEST ROUTER 

import { getAffirmations } from "../models/models.js";
affirmationsRouter.get("/", async function (req, res) {
const result = await getAffirmations ();
return res.json({
sucess: true,
payload: result,
});
});

//GET REQUEST AFFIRMATION BY ID

import { getAffirmationsById } from "../models/models.js";
affirmationsRouter.get("/:id", async function (req, res) {
    const id = Number(req.params.id);
    const affirmationsResult = await getAffirmationsById(id);
    return res.json({
    sucess: true,
    payload: affirmationsResult,
    });
    });
//DELETE REQUEST import express from "express";
 
import { deleteAffirmationById } from "../models/models.js";
affirmationsRouter.delete("/:id", async function (req,res) {
    const id = Number(req.params.id);
    const affirmationDelete = await deleteAffirmationById(id);
    return res.json({
        sucess: true,
        payload: affirmationDelete,
    });
});

export default affirmationsRouter;

