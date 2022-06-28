import { query } from '../db/index.js';

//Gets all data from blogs1 table

export async function getBlogs() {
    const blogs = await query(`SELECT * FROM blogs1;`);
    return blogs.rows
}

