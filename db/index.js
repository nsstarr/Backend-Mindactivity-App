import pg from "pg";

//Setting up Pool
//Commented out code is a backup database

export const pool = new pg.Pool({ 
    // user: process.env.PGUSER,
    // host: process.env.PGHOST,
    // database: process.env.PGDATABASE,
    // password: process.env.PGPASSWORD,
    // port: process.env.PGPORT, 
    connectionString: process.env.DATABASE_URI,
    ssl:{rejectUnauthorized:false},
})


//This is redundant, instead, import Pool into the scripts and use Pool.query

export function query (text, params, callback) {
    return pool.query(text, params, callback);
}