import { query } from '../index.js'

//Creating a table with affirmations

const sqlString = `CREATE TABLE IF NOT EXISTS codingAffirmations (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, content TEXT);`;

async function createAffirmationsTable(){
    const res = await query (sqlString);
    console.log(res);
    console.log('created affirmations table')
}



createAffirmationsTable();