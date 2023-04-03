import express from "express";

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// skills constants
const frontendSkills = [
  {
    text: "React",
    href: "images/skills/React.png",
  },
  {
    text: "HTML",
    href: "images/skills/HTML.png",
  },
  {
    text: "CSS",
    href: "images/skills/CSS.png",
  },
  {
    text: "JavaScript",
    href: "images/skills/JavaScript.png",
  },
];

const backendSkills = [
  {
    text: "Node.JS",
    href: "images/skills/Node.JS.png",
  },
  {
    text: "Django",
    href: "images/skills/Django.png",
  },
  {
    text: "SQL",
    href: "images/skills/SQL.png",
  },
  {
    text: "MongoDB",
    href: "images/skills/mongoDB.png",
  },
];

const MLSkills = [
  {
    text: "Python",
    href: "images/skills/Python.png",
  },
  {
    text: "TensorFlow",
    href: "images/skills/TensorFlow.png",
  },
  {
    text: "Anaconda",
    href: "images/skills/Anaconda.png",
  },
];
const otherSkills = [
  {
    text: "C++",
    href: "images/skills/C++.png",
  },
  {
    text: "Linux",
    href: "images/skills/Linux.png",
  },
  {
    text: "Bash",
    href: "images/skills/Bash.png",
  },
  {
    text: "Git",
    href: "images/skills/Git.png",
  },
];

// project dictionary
const projects = [
  {
    id: "0",
    title: "TO DO Web Application",
    description: "TO DO web application using React as Frontend, Django as API and MangoDB as Database.",
    imagePath: "./images/income-project.png",
    github: "https://github.com/AEsir777/time_expense_management",
    demoLink: "/projects/0",
    tech: ['React', 'Django', 'MangoDB']
  },
  {
    id: "1",
    title: "Machine Learning",
    description: "Some Machine Learning Projects using Tensorflow on forecasting and image recognition.",
    imagePath: "./images/ML-project-img.jpg",
    github: "https://github.com/AEsir777/some-data-analysis-project",
    demoLink: "/projects/1",
    tech: ['TensorFlow', 'Sklearn']
  },
  {
    id: "2",
    title: "CC3K",
    description: "A CC3K game built with C++.",
    imagePath: "./images/cc3k-project-img.png",
    github: "https://github.com/AEsir777/cc3k",
    demoLink: "/projects/2",
    tech: ['C++', 'MVC']
  },
  {
    id: "3",
    title: "Protein data analysis",
    description: "Preprocess the imblanced dataset and train random forest model for prediction. Model is hosted on hugging face.",
    imagePath: "",
    github: "https://github.com/AEsir777/CxC_project",
    demoLink: "https://huggingface.co/spaces/AEsir777/CxC_project",
    tech: ['Python', 'Sklearn']
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