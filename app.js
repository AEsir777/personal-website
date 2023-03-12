import express from "express";

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

const frontendSkills = ['React', 'HTML', 'CSS', 'JavaScript'];
const backendSkills = ['Python', 'SQL', 'Node.JS', 'Express', 'Django'];
const MLSkills = ["TensorFlow", "Scikit-learn", "Jupyter", "Anaconda"];
const otherSkills = ["C++", "Linux", "Bash", "Git"];

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