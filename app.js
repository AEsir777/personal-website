import express from "express";

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

const frontendSkills = [
  {
    text: "React",
    href: "images/React.png",
  },
  {
    text: "HTML",
    href: "images/HTML.png",
  },
  {
    text: "CSS",
    href: "images/CSS.png",
  },
  {
    text: "JavaScript",
    href: "images/JavaScript.png",
  },
];
const backendSkills = [
  {
    text: "Python",
    href: "images/Python.png",
  },
  {
    text: "SQL",
    href: "images/SQL.png",
  },
  {
    text: "Node.JS",
    href: "images/Node.JS.png",
  },
  {
    text: "Express",
    href: "images/Express.png",
  },
  {
    text: "Django",
    href: "images/Django.png",
  },
];
const MLSkills = [
  {
    text: "TensorFlow",
    href: "images/TensorFlow.png",
  },
  {
    text: "Scikit-learn",
    href: "images/Scikit-learn.png",
  },
  {
    text: "Jupyter",
    href: "images/Jupyter.png",
  },
  {
    text: "Anaconda",
    href: "images/Anaconda.png",
  },
];
const otherSkills = [
  {
    text: "C++",
    href: "images/C++.png",
  },
  {
    text: "Linux",
    href: "images/Linux.png",
  },
  {
    text: "Bash",
    href: "images/Bash.png",
  },
  {
    text: "Git",
    href: "images/Git.png",
  },
];

app.get("/", (req, res) => {
  const parameters = {
    frontendSkills: frontendSkills,
    backendSkills: backendSkills,
    MLSkills: MLSkills,
    otherSkills: otherSkills,
  };
  res.render("index", parameters);
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Server is running on port 3000.');
});