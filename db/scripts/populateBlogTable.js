import { query } from "../index.js";
import blogs from "../../lib/blogs.js";

async function populateBlogTable() {
  for (let i = 0; i < blogs.length; i++) {
    const res = await query(
      `INSERT INTO blogs (title, author, datePosted, content, imageSrc, imageAlt) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [
        blogs[i].title,
        blogs[i].author,
        blogs[i].datePosted,
        blogs[i].content,
        blogs[i].imageSrc,
        blogs[i].imageAlt
      ]
    );
    console.log(res.rows[0].title, "populated blog table");
  }

}

populateBlogTable();
