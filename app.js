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
const uri =
  "mongodb+srv://kebing:" + process.env.pwd + "@cluster0.krgy2sw.mongodb.net/" +
  "?retryWrites=true&w=majority";

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

app.get("/projects/:projectId", (req, res) => {
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

// Connect the client to the server
client.connect((err) => {
  if (err) { 
    console.error(err); 
    return false; 
  }
  
  // connection to mongo is successful, listen for requests
  app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running.");
  });
});
