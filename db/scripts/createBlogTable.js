import { query } from "../index.js";

//Creating a table for blog data

const sqlString = `CREATE TABLE IF NOT EXISTS blogs1 (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, title TEXT, author TEXT, datePosted TEXT, content TEXT, imageSrc TEXT, imageAlt TEXT);`;

async function createBlogTable() {
  const res = await query(sqlString);
  console.log(res);
  console.log("created blog1 table");
}

createBlogTable();
