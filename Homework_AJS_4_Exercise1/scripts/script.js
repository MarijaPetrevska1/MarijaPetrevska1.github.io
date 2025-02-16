// Homework 4 (AJS)

// ## Exercise 1
console.log("");
console.log("==> Advanced JavaScript")
console.log("====== Exercise 1 =======")
// Creating 3 classes: Academy, Student and Subject.

// First class: Academy
class Academy {
  constructor(name, start, end) {
    this.name = name;
    this.students = [];
    this.subjects = [];
    this.start = start;
    this.end = end;
    this.numberOfClasses = this.subjects.length * 10; 
  }

  // Print all students
  printStudents() {
    this.students.forEach(student => {
      console.log(`${student.firstName} ${student.lastName}`);
    });
  }

  // Print all subjects
  printSubjects() {
    this.subjects.forEach(subject => {
      console.log(subject.title);
    });
  }
}

// Second class: Subject
class Subject {
  constructor(title, isElective) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = null;
    this.students = [];
  }

  // Override the number of classes
  overrideClasses(number) {
    if (number >= 3) {
      this.numberOfClasses = number;
    } else {
      console.error("Number of classes cannot be smaller than 3");
    }
  }
}

// Third class: Student
class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
  }

  // Method to set Academy for the student
  startAcademy(academy) {
    this.academy = academy;
    academy.students.push(this);
  }

  // Method to start a subject for the student
  startSubject(subject) {
    if (this.academy && this.academy.subjects.includes(subject)) {
      this.currentSubject = subject;
      subject.students.push(this);
    } else {
      console.error("The student must be enrolled in the Academy, and the subject must be part of the Academy's available courses.");
    }
  }
}

// Creating an Academy
const myAcademy = new Academy("Qinshift Academy", "2025-09-01", "2026-09-01");

// Subjects
const webDesignSubject = new Subject("Web Design", false);
const JavaScriptBasicSubject = new Subject("JavaScript Basic", true);
const JavaScriptAdvancedSubject = new Subject("JavaScript Advanced", true);
const softwareTestingSubject = new Subject("Software Testing", true);


// Setting Academy in Subjects
webDesignSubject.academy = myAcademy;
JavaScriptBasicSubject.academy = myAcademy;
JavaScriptAdvancedSubject.academy = myAcademy;
softwareTestingSubject.academy = myAcademy;


// Subjects to the Academy
myAcademy.subjects.push(webDesignSubject);
myAcademy.subjects.push(JavaScriptBasicSubject);
myAcademy.subjects.push(JavaScriptAdvancedSubject);
myAcademy.subjects.push(softwareTestingSubject);



// Creating Students
const student1 = new Student("Marija", "Petrevska", 26);
const student2 = new Student("Angela", "Williams", 25);
const student3 = new Student("Andrej", "Johnson", 22);
const student4 = new Student("Lee", "Johnson", 22);


// Start Academy for Students
student1.startAcademy(myAcademy);
student2.startAcademy(myAcademy);
student3.startAcademy(myAcademy);
student4.startAcademy(myAcademy);

// Start Subjects for Students
student1.startSubject(webDesignSubject);
student2.startSubject(softwareTestingSubject);
student3.startSubject(JavaScriptBasicSubject);
student4.startSubject(JavaScriptAdvancedSubject);



// Print Students and Subjects
myAcademy.printStudents(); 
myAcademy.printSubjects(); 


// Override number of classes in the subject
softwareTestingSubject.overrideClasses(5); 
webDesignSubject.overrideClasses(2); // => // This will give an error
webDesignSubject.overrideClasses(5); 
webDesignSubject.overrideClasses(4); 

