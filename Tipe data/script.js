function showDataTypes() {
  let name = "Chanyeol"; // String
  let age = 32; // Number
  let isStudent = false; // Boolean
  let skills = ["JavaScript", "HTML", "CSS"]; // Array
  let person = {
    // Object
    firstName: "Chanyeol",
    lastName: "Park",
    age: 32,
    isStudent: false,
  };
  let salary = null; // Null
  let futureJob; // Undefined

  alert(
    `String: ${name}\nNumber: ${age}\nBoolean: ${isStudent}\nArray: ${skills}\nObject: ${JSON.stringify(
      person
    )}\nNull: ${salary}\nUndefined: ${futureJob}`
  );

  console.log("String:", name);
  console.log("Number:", age);
  console.log("Boolean:", isStudent);
  console.log("Array:", skills);
  console.log("Object:", person);
  console.log("Null:", salary);
  console.log("Undefined:", futureJob);
}
