import { query } from "../index.js";
import { affirmations } from "../../lib/data.js";

async function populateAffirmationsTable () {
for (let i =0; i < affirmations.length; i++) {
    const res = await query(`INSERT INTO affirmations (content) VALUES (${affirmations[i].content}) RETURNING *;`);
    console.log (res.rows[0].content,"populated affirmations table");
}
}

populateAffirmationsTable();