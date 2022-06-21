import pg from "pg";

//Setting up Pool

export const pool = new pg.Pool({ 
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT, 
    ssl:{rejectUnauthorized:false},
})

export function query (text, params, callback) {
    return pool.query(text, params, callback);
}