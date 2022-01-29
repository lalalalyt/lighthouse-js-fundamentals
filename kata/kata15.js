const organizeInstructors = function (instructors) {
  const list = {}
  for (let instructor of instructors) {
    let courseName = instructor.course
    if (!list[courseName]) {
      list[courseName] = [instructor.name]
    }
    else {
      list[courseName].push(instructor.name)
    }
  }
  return list
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));