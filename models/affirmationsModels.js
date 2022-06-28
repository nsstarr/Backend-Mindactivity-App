import { query } from '../db/index.js';

//Get all data from Affirmation table

export async function getAffirmations() {
    const affirmations = await query(`SELECT * FROM codingAffirmations;`);
    return affirmations.rows
}

//Get Affermations by specific ID

export async function getAffirmationsById(id) {
    const affirmation = await query(`SELECT * FROM codingAffirmations WHERE id = ($1);`, [id])
    return affirmation.rows
}

//Delete an affirmation by specific id 

export async function deleteAffirmationById(id) {
    const deletedAffirmation = await query(
        'DELETE FROM codingAffirmations WHERE id = $1 RETURNING *;',
        [id]
    );
}

