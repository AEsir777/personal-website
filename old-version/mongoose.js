import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

// data base for my personal website
const database = "pertfolio"
// connection string
const uri = "mongodb+srv://kebing:" + process.env.pwd + "@cluster0.krgy2sw.mongodb.net/" + database + "?retryWrites=true&w=majority";

mongoose.connect(uri);
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

// create default skills
const frontendSkill = new Skill({
  skillName: "Frontend Skills",
  skillContent: [
    {
      text: "React",
      href: "images/skills/React.svg",
    },
    {
      text: "HTML",
      href: "images/skills/HTML.svg",
    },
    {
      text: "CSS",
      href: "images/skills/CSS.svg",
    },
    {
      text: "JavaScript",
      href: "images/skills/JavaScript.svg",
    },
  ],
});

const backendSkill = new Skill({
  skillName: "Backend Skills",
  skillContent: [
    {
      text: "Node.JS",
      href: "images/skills/Node.JS.svg",
    },
    {
      text: "Django",
      href: "images/skills/Django.svg",
    },
    {
      text: "SQL",
      href: "images/skills/SQL.png",
    },
    {
      text: "MongoDB",
      href: "images/skills/MongoDB.svg",
    },
  ],
});

const MLSkill = new Skill({
  skillName: "Machine Learning Skills",
  skillContent: [
    {
      text: "Python",
      href: "images/skills/Python.svg",
    },
    {
      text: "TensorFlow",
      href: "images/skills/TensorFlow.svg",
    },
    {
      text: "Anaconda",
      href: "images/skills/Anaconda.svg",
    },
  ],
});

const otherSkill = new Skill({
  skillName: "Other Skills",
  skillContent: [
    {
      text: "C++",
      href: "images/skills/C++.svg",
    },
    {
      text: "Linux",
      href: "images/skills/Linux.svg",
    },
    {
      text: "Bash",
      href: "images/skills/Bash.svg",
    },
    {
      text: "Git",
      href: "images/skills/Git.svg",
    },
  ],
});

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

// create default skills
const toDoList = new Project({
  _id: 0,
  title: "TO DO Web Application",
  description:
    "TO DO web application using React as to build headless front end UI, Django restframe work to make API request to the database MangoDB.",
  imagePath: "./images/projects/income-project.png",
  views: [
    {
      viewName: "GitHub",
      href: "https://github.com/AEsir777/time_expense_management",
      iconPath: "images/git-hub.svg",
    },
  ],
  tech: ["React", "Django", "MangoDB"],
});

const proteinPredictionModel = new Project({
  _id: 1,
  title: "Protein Prediction Model",
  description:
    "Preprocessed the labeled dataset that contains features and labels for if the data belongs to a known binding site or not and then conducted supervised classification using Random Forest.",
  imagePath: "./images/projects/protein-prediction-model.png",
  views: [
    {
      viewName: "GitHub",
      href: "https://github.com/AEsir777/CxC_project",
      iconPath: "images/git-hub.svg",
    },
    {
      viewName: "External Link",
      href: "https://huggingface.co/spaces/AEsir777/CxC_project",
      iconPath: "images/external-link.svg",
    },
  ],
  tech: ["Python", "TensorFlow", "Sklearn", "Hugging Face"],
});

const CC3K = new Project({
  _id: 2,
  title: "CC3K",
  description:
    "A CC3K game built with C++ and used MVC design pattern to control the view - X11, the model - game, controller - key board inputs.",
  imagePath: "./images/projects/cc3k-project-img.png",
  views: [
    {
      viewName: "GitHub",
      href: "https://github.com/AEsir777/cc3k",
      iconPath: "images/git-hub.svg",
    },
  ],
  demoLink: "/projects/2",
  tech: ["C++", "MVC"],
});

const pertfolio = new Project({
  _id: 3,
  title: "Personal Website",
  description:
    "My personal website with front end built using bootstrap and jquery and backend using express with all the projects and skills info stored in MongoDB",
  imagePath: "./images/projects/pertfolio.png",
  views: [
    {
      viewName: "GitHub",
      href: "https://github.com/AEsir777/personal-website",
      iconPath: "images/git-hub.svg",
    },
  ],
  tech: ["Node.js", "MongoDB", "Bootstrap", "JQuery", "npm"],
});


// array of items to insert
const skillItems = [frontendSkill, backendSkill, MLSkill, otherSkill];
const projectItems = [toDoList, proteinPredictionModel, CC3K, pertfolio];

const insertItems = async function(collection, items) {
  await collection.insertMany(items).then((res) => {
      console.log("Items inserted sucessfully.");
  }).catch((err) => {
      console.log(err); 
  });
}

// main function to insert stuffs
const insertDefaultItems = async function() {
  await insertItems(Skill, skillItems);
  await insertItems(Project, projectItems).then(() => {
    mongoose.connection.close();
  });
}

const returnItems = async function(collection) {
  await collection.find({}).then((res) => {
    console.log(res);
  });
}

const returnSkillsProjects = async function() {
  await returnItems(Skill);
  await returnItems(Project).then(() => {
    mongoose.connection.close();
  });
}

returnSkillsProjects();



