import express from "express";
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const skills = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

const projects = [
  {
    _id: 0,
    title: "TO DO Web Application",
    description:
      "TO DO web application using React as to build headless front end UI, Django restframe work to make API request to the database MangoDB.",
    imagePath: "./images/projects/income-project.png",
    views: [
      {
        viewName: "GitHub",
        href: "https://github.com/AEsir777/time_expense_management",
        iconPath: "images/GitHub.svg",
      },
    ],
    tech: ["React", "Django", "MangoDB"],
  },
  {
    _id: 1,
    title: "Protein Prediction Model",
    description:
      "Preprocessed the labeled dataset that contains features and labels for if the data belongs to a known binding site or not and then conducted supervised classification using Random Forest.",
    imagePath: "./images/projects/protein-prediction-model.png",
    views: [
      {
        viewName: "GitHub",
        href: "https://github.com/AEsir777/CxC_project",
        iconPath: "images/GitHub.svg",
      },
      {
        viewName: "External Link",
        href: "https://huggingface.co/spaces/AEsir777/CxC_project",
        iconPath: "images/external-link.svg",
      },
    ],
    tech: ["Python", "TensorFlow", "Sklearn", "Hugging Face"],
  },
  {
    _id: 2,
    title: "CC3K",
    description:
      "A CC3K game built with C++ and used MVC design pattern to control the view - X11, the model - game, controller - key board inputs.",
    imagePath: "./images/projects/cc3k-project-img.png",
    views: [
      {
        viewName: "GitHub",
        href: "https://github.com/AEsir777/cc3k",
        iconPath: "images/GitHub.svg",
      },
    ],
    demoLink: "/projects/2",
    tech: ["C++", "MVC"],
  },
  {
    _id: 3,
    title: "Personal Website",
    description:
      "My personal website with front end built using bootstrap and jquery and backend using express with all the projects and skills info stored in MongoDB",
    imagePath: "./images/projects/pertfolio.png",
    views: [
      {
        viewName: "GitHub",
        href: "https://github.com/AEsir777/personal-website",
        iconPath: "images/GitHub.svg",
      },
    ],
    tech: ["Node.js", "MongoDB", "Bootstrap", "JQuery", "npm"],
  },
];

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

  if (found === false) {
    res.send("Invalid ID");
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000.");
});