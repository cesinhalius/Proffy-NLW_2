const database = require('./db')
const createTeacher = require('./create-teacher');

database.then(async (db) => {

  // inserir dados 

  teacherValue ={
    name:"Diego Fernandes",
    avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp:"8899568890",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
  }

  classValue ={
    subject:"Quimica",
    cost:"20",
  }

  classScheduleValues = [
    {
      weekday:1,
      time_from:720,
      time_to:1100
    },
    {
      weekday:2,
      time_from:520,
      time_to:1100
    }
  ]
 // await createTeacher(db, {teacherValue, classValue, classScheduleValues})

  const selectTeachers = await db.all("SELECT * FROM teachers")
  //console.log(selectTeachers)

 const selectClassesAndTeachers = await db.all(`
   SELECT classes.*, teachers.*
   FROM teachers
   JOIN classes ON (classes.teacher_id = teachers.id)
   WHERE  classes.teacher_id = 1
 `)
 console.log(selectClassesAndTeachers)
})