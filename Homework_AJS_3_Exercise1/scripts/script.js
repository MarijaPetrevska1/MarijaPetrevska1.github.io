// Homework 3 (AJS)
// Exercises 
// => Exercise 1 (Using higher order functions to find the answers)

const studentsApiUrl = 'https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G2/Class07/students.json';

// Fetching the JSON data from the provided URL
fetch(studentsApiUrl)
  .then(response => response.json())
  .then(students => {
    // 1. All students with an average grade higher than 3
    const studentsWithAvgGradeAbove3 = students.filter(student => student.averageGrade > 3);
    console.log("1. All students with an average grade higher than 3:", studentsWithAvgGradeAbove3);

    // 2. All female student names with an average grade of 5
    const femaleStudentNamesWithAvgGrade5 = students.filter(student => student.gender === 'Female' && student.averageGrade === 5).map(student => `${student.firstName} ${student.lastName}`);
    console.log("2. All female students with an average grade of 5:", femaleStudentNamesWithAvgGrade5);

    // 3. All male student full names who live in Skopje and are over 18 years old
    const maleStudentsFullNamesSkopjeAdults = students.filter(student => student.gender === 'Male' && student.city === 'Skopje' && student.age > 18)
      .map(student => `${student.firstName} ${student.lastName}`);
    console.log("3. All male students who live in Skopje and are over 18:", maleStudentsFullNamesSkopjeAdults);

    // 4. The average grades of all female students over the age of 24
    const femaleAbove24AverageGrades = students.filter(student => student.gender === 'Female' && student.age > 24).map(student => student.averageGrade);
    console.log("4. The Average grades of female students above 24:", femaleAbove24AverageGrades);

    // 5. All male students with a name starting with B and average grade over 2
    const maleStudentsBNameAvgGradeOverAbove2 = students.filter(student => student.gender === 'Male' && student.firstName.startsWith('B') && student.averageGrade > 2)
      .map(student => student.firstName);
    console.log("5. All male students with a name starting with B and average grade over 2:", maleStudentsBNameAvgGradeOverAbove2);

    // 6. Student emails of all female students with age between 20 and 30 years, ordered ascending
    const femaleStudentsEmailsWithAge20to30 = students.filter(student => student.gender === 'Female' && student.age >= 20 && student.age <= 30)
      .map(student => student.email).sort();
    console.log("6. Emails of female students aged 20-30, ordered ascending:", femaleStudentsEmailsWithAge20to30);

    // 7. Students full names of students above 40, ordered descending
    const studentsFullNamesAbove40 = students.filter(student => student.age > 40).map(student => `${student.firstName} ${student.lastName}`)
      .sort((a, b) => b.localeCompare(a));
    console.log('7. Full names of students above 40, ordered descending:', studentsFullNamesAbove40);

    // 8. Count of students using Google mail
    const studentsGoogleMailCount = students.filter(student => student.email.includes('@google.com')).length;
    console.log('8. Count of students using Google mail:', studentsGoogleMailCount);
    // gmail
    const studentsGoogleMailCountGmail = students.filter(student => student.email.includes('@gmail.com')).length;
    console.log('   Count of students using Google mail (gmail):', studentsGoogleMailCountGmail);

    // 9. The average age of female students living in Skopje
        const femaleStudentsSkopjeAverageAge = students.filter(student => student.gender === 'Female' && student.city === 'Skopje').map(student => student.age) // Get an array of ages
        .reduce((acc, age) => acc + age, 0); 

    // Calculating the average
        const averageAge = femaleStudentsSkopjeAverageAge / students.filter(student => student.gender === 'Female' && student.city === 'Skopje').length;

        console.log('9. The average age of female students living in Skopje:', averageAge);

  })
  .catch(error => console.error('An error occurred while fetching the data:', error));

