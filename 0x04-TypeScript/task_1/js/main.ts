interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience: number,
  location: string,
  [propName: string]: any
}

interface Directors extends Teacher {
  numberOfReports: number
}

function printTeacher(firstName, lastName) {
  return (firstName: string, lastName: string) : string =>
  `${firstName.charAt[0]. lastName}`;
}

