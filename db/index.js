import pg from "pg";

//Setting up Pool
//Commented out code is a backup database

export const pool = new pg.Pool({ 
    // user: process.env.PGUSER,
    // host: process.env.PGHOST,
    // database: process.env.PGDATABASE,
    // password: process.env.PGPASSWORD,
    // port: process.env.PGPORT, 
    connectionString: "postgres://rzjiqueojbcnzg:276d0558be76f12cf3840ed1c593ebeb7d42097e5f2cfd9291c4849d0a5fd6e5@ec2-34-241-90-235.eu-west-1.compute.amazonaws.com:5432/d9arpv4malmbb6",
    ssl:{rejectUnauthorized:false},
})


//This is redundant, instead, import Pool into the scripts and use Pool.query

export function query (text, params, callback) {
    return pool.query(text, params, callback);
}