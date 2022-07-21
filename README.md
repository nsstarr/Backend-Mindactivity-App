<center>
<img src="./assets/Screenshot 2022-06-29 100133.jpg" />
</center>

## ***List of Contents***
1. [Introduction](#sparkles-about-mindactivity-sparkles)
2. [Environment Variables](#environment-variables)
3. [Run Locally](#run-locally)
4. [How The Server Works](#how-the-server-works-)
5. [Tech Stack](#tech-stack-)
6. [Running Tests](#running-tests-)
7. [Usage Examples](#usageexamples-)
8. [API References](#api-reference-list-)
9. [Appendix](#appendix-)

<br/>

---

<br />

## :sparkles: ***About Mindactivity*** :sparkles:
Welcome to Mindactivity! Just in case you were curious about the name, mindfulness + productivity = mindactivity.
It's a Mindfulness App designed to manage stress levels and increase productivity using meditative media.

**This documentation is for the backend of the Mindactivity app. If you're interested in the frontend specifically, go to [https://github.com/SchoolOfCode/w9_frontend-project-mindactivity]**

<br/>

---

<br />

<a name="environment-variables"/>
  
## ***Environment Variables*** ⛓️

To run this backend repository, please create a .env file in the root of the folder and inside, add your credentials in the following order; (these credentials can be found in your Heroku credential settings)

DATABASE URI = 


**however, if you would prefer, you can also use this format instead;**

PGHOST=

PGUSER=

PGDATABASE=

PGPASSWORD=

PGPORT=

**Please note:** If you choose to use this format, ensure to uncomment the commented out code in db/index.js

<br/>

---

<br />

## ***Run Locally*** 🏃‍♀️

Navigate to where you would like to save the project

```bash
  cd <chosen directory>
```

Clone the project

```bash
  git clone https://github.com/SchoolOfCode/w9_frontend-project-mindactivity.git
```

Navigate into the project directory

```bash
  cd w9_frontend-project-mindactivity
```

Install dependencies

```bash
  npm install (or npm i)
```

<br/>

---

<br />

## ***How the server works*** 🌐

Make sure you're inside the project directory (follow 'Run Locally' section)

To start the server

```bash
  npm run dev
```

 - The server should be running at http://localhost:3001
 - The server will update automatically to any changes, you don't need to close it everytime you wish to make a change

To close the server, press the following keys; (make sure you're inside the terminal)

```bash
  ctrl C
```

<br/>

---

<br />

## ***Tech Stack*** ⚙️

**Engine:** Node.js

**Dev Dependencies:** Nodemon, Babel, Jest, Supertest, Dotenv 

**Dependencies:** Express, PostgreSQL, Cors, Morgan

**Data storage:** Heroku

<br/>

---

<br />

## ***Running Tests*** 🃏

To run tests, run the following command

```bash
  npm run test (or npm t)
```

<br/>

---

<br />

## ***Usage/Examples*** 🔬

Here are some basic examples of how to use this API:

You can set up some custom scripts to run specific files inside this project;

Scripts can be found inside of the package.json file

**Examples of scripts:**

Create a table
```javascript
"db:createAffirmationsTable": "node -r dotenv/config ./db/scripts/createAffirmationsTable.js"
```

Populate the table:
```javascript
"db:populateAffirmationsTable": "node -r dotenv/config ./db/scripts/populateAffirmationsTable.js"
```

**Example of how to run these scripts:**
Creates a table in Heroku
```bash
npm run db:createAffirmationsTable
```

Populate a table in Heroku
```bash
npm run db:populateAffirmationsTable
```

<br/>

---

<br />

## ***API reference list*** 🔎

**For Affirmations:**

To get all the Affirmations:
```
http://localhost:3001/v1/mindactivity
```

To get Affirmations by specific ID:
```
http://localhost:3001/v1/mindactivity/<ID>
```
- For example: http://localhost:3001/v1/mindactivity/2

**For Blogs:**

To get all the Blogs:
```
http://localhost:3001/v1/blogs
```

<br/>

---

<br />

## ***Appendix*** 📝

**Here are some links to documentation that could be helpful with using this server:**

- Node.js - https://nodejs.org/en/docs/

- PostgreSQL - https://www.postgresql.org/docs/

- Heroku - https://devcenter.heroku.com/categories/nodejs-support

- Jest - https://jestjs.io/docs/getting-started

- Express - https://expressjs.com/en/starter/installing.html
