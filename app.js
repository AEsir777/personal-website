import express from "express";
import mongoose from "mongoose";
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
  database + "?retryWrites=true&w=majority";

try {
  await mongoose.connect(uri);
} catch (err) {
  console.log(err);
};

console.log("Connected to database pertfolio.");

// skills section
// schema for skill collection
const skillSchema = new mongoose.Schema({
  skillName: {
    type: String,
    required: true,
  },
  skillContent: [
    {
      text: String,
      href: String,
    },
  ],
});

const Skill = mongoose.model("Skill", skillSchema);

// project section
// schema for project collection
const projectSchema = new mongoose.Schema(
  {
    _id: Number,
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imagePath: {
      type: String,
      required: true,
    },
    views: [
      {
        viewName: String,
        href: String,
        iconPath: String,
      },
    ],
    tech: [String],
  },
  { _id: false }
);

const Project = mongoose.model("Project", projectSchema);

// find the items
const skills = await Skill.find({}).catch((err) => {
  console.log(err);
});
const projects = await Project.find({}).catch((err) => {
  console.log(err);
})
mongoose.connection.close();


app.get("/", (req, res) => {
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

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000.");
});
