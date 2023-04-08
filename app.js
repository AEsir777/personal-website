import express from "express";

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// skills constants
const frontendSkills = [
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
];

const backendSkills = [
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
];

const MLSkills = [
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
];
const otherSkills = [
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
];

// project dictionary
const projects = [
  {
    id: "0",
    title: "TO DO Web Application",
    description: "TO DO web application using React as Frontend, Django as API and MangoDB as Database.",
    imagePath: "./images/projects/income-project.png",
    github: "https://github.com/AEsir777/time_expense_management",
    demoLink: "/projects/0",
    tech: ['React', 'Django', 'MangoDB']
  },
  {
    id: "1",
    title: "Protein Prediction Model",
    description: "Preprocessed the labeled dataset that contains features and labels for if the data belongs to a known binding site or not and then conducted supervised classification using Random Forest.",
    imagePath: "./images/projects/protein-prediction-model.png",
    github: "https://github.com/AEsir777/CxC_project",
    demoLink: "https://huggingface.co/spaces/AEsir777/CxC_project",
    tech: ['TensorFlow', 'Sklearn']
  },
  {
    id: "2",
    title: "CC3K",
    description: "A CC3K game built with C++ and used MVC design pattern to control the view - X11, the model - game, controller - key board inputs.",
    imagePath: "./images/projects/cc3k-project-img.png",
    github: "https://github.com/AEsir777/cc3k",
    demoLink: "/projects/2",
    tech: ['C++', 'MVC']
  },
];

app.get("/", (req, res) => {
  const parameters = {
    frontendSkills: frontendSkills,
    backendSkills: backendSkills,
    MLSkills: MLSkills,
    otherSkills: otherSkills,
    projects: projects
  };
  res.render("index", parameters);
});

app.get("/projects/:projectId", (req, res) => {
  const id = req.params.projectId;
  projects.forEach((project) => {
    if ( project.id === id ) {
      res.send(project.title);
    } else {
      res.send("Invalid project ID.");
    }
  });
  
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Server is running on port 3000.');
});