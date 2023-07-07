// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstname: "Odu",
  lastName: "Odu",
  age: 31,
  location: "Parliamentary"
}

const student2: Student = {
  firstName: "Divine",
  lastName: "Atan",
  age: 19,
  location: "Atimbo"
}

// Create an array of students
const studentsList = [student1, student2];

const table = document.getElementById('studentTable') as HTMLTableElement;

// Create a new row for each student and append it to the table
studentsList.forEach((student) => {
        const row = table.insertRow();
        const firstNameCell = row.insertCell(0);
        const locationCell = row.insertCell(1);

        firstNameCell.innerHTML = student.firstName;
        locationCell.innerHTML = student.location;
})
