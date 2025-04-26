import express from "express";
import { MongoClient } from 'mongodb';
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// connect to MongoDB
// data base for my personal website
const database = "pertfolio";
// connection string
const uri = process.env.connectionString;

const client = new MongoClient(uri);

app.get("/", async (req, res) => {
  // get the DB
  const db = client.db(database);
  
  // read from skills
  const skills = await db.collection("skills").find({}).toArray();
  // read from projects
  const projects = await db.collection("projects").find({}).toArray();

  const parameters = {
    skills: skills,
    projects: projects,
  };
  res.render("index", parameters);
});

app.get("/projects/:projectId",  async(req, res) => {
  const projects = await client.db(database).collection("projects").find({}).toArray();

  let found = false;
  const id = req.params.projectId;
  projects.forEach((project) => {
    if (project._id === parseInt(id)) {
      res.send(project.title);
      found == true;
    }
  });

  if ( found === false ) {
    res.send("Invalid ID");
  }
});

client.connect().then(() => {
  console.log("MongoDB connected.");
  app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running.");
  });
}).catch((err) => {
  console.error(err);
});


