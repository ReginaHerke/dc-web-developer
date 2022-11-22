/* let courseTitel = "Web Developer";
let courseDescription = "Hier Text einfügen";
let courseTrainers = ["Daniel", "Martin", "Pius", "Florian"];
let courseTopics = ["html", "css", "js"];
let courseStudents = ["Marco", "Julian", "Ebrahem", "Johannes", "Denis"];

function courseInformations() {
  console.log(
    courseTitel,
    courseDescription,
    courseTrainers,
    courseTopics,
    courseStudents
  );
}

courseInformations(); */

/* function courseInformations(course) {
  console.log(
    course.titel,
    course.description,
    course.trainers,
    course.topics,
    course.students
  );
}

courseInformations(course);

function newStudent(name) {
  course.students.push(name);
  console.log(course.students);
} */

const course = {
  titel: "Web Developer",
  description: "Hier Text einfügen",
  trainers: ["Daniel", "Martin", "Pius", "Florian"],
  topics: [
    { titel: "html", units: 20, trainer: "Martin" },
    { titel: "css", units: 40, trainer: "Pius" },
    { titel: "js", units: 50, trainer: "Daniel" },
  ],
  students: ["Marco", "Julian", "Ebrahem", "Johannes", "Denis"],
  courseInformations() {
    console.log(
      this.titel,
      this.description,
      this.trainers,
      this.topics,
      this.students
    );
  },
  newStudent(name) {
    this.students.push(name);
    console.log(this.students);
  },
  addTopic(titel, units, trainer) {
    this.topics.push(titel, units, trainer);
    console.log(this.topics);
  },
};

course.courseInformations();
course.newStudent("laura");
course.addTopic("kurs", 15, "name");
