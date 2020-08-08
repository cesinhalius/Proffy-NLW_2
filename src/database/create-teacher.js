module.exports = async function(db,{teacherValue, classValue, classScheduleValues}){

  const InsertTeacher = await db.run(`
          INSERT INTO teachers (
            name,
            avatar,
            whatsapp,
            bio
          ) VALUES (
            "${teacherValue.name}",
            "${teacherValue.avatar}",
            "${teacherValue.whatsapp}",
            "${teacherValue.bio}"
          );
  `)
  const teacher_id = InsertTeacher.lastID

  const InsertClass = await db.run(`
  INSERT INTO  classes (
    subject,
    cost,
    teacher_id
  ) VALUES (
    "${classValue.subject}",
    "${classValue.cost}",
    "${teacher_id}"
    
       );
  `)
  const class_id = InsertClass.lastID


  const Insert_All_ClassScheduleValues = classScheduleValues.map((classScheduleValue)=>{
      return db.run(`
      INSERT INTO class_schedule(
        class_id,
        weekday,
        time_from,
        time_to
        )VALUES(
          "${class_id}",
          "${classScheduleValue.weekday}",
          "${classScheduleValue.time_from}",
          "${classScheduleValue.time_to}"
        )
      `)
  })
  await Promise.all(Insert_All_ClassScheduleValues)
}