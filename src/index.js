const teachers = [
  {name:"Diego Fernandes",
    avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatapp:"8899568890",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject:"Quimica",
    cost:"20",
    weekday:[1],
    time_from:[720],
    time_to:[1100]
  }
]
const subjects = [
"Artes",
"Biologia",
"Ciência",
"Educação Física",
"Física",
"Geografia",
"História",
"Matemática",
"Português",
"Química",]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

const express = require('express');
const app = express();
const nunjuck = require('nunjucks');


function pageIndex(req,res){
  return res.render("main.html")
}

function pageStudy(req,res){
  const filters = req.query;
  return res.render( "study.html", {teachers, filters, subjects, weekdays})
}

function pageGiveClasses(req,res){
    return res.render("give-classes.html")
}
//configurar nunjucks
nunjuck.configure('src/views',{
  express: app,
  noCache: true
})
app.get('/' , pageIndex)
app.get('/study', pageStudy)
app.get('/give-classes', pageGiveClasses)

app.use(express.static("public"))
app.listen(3000)