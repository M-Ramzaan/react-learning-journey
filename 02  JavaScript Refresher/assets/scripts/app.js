//Course Name = The complete React Course 2024 Udemy (Maximilian)
//Section Name = JavaScript Refresher
//Date =  19-Dec-2024
//Video Num & Topic Name = 05. import & export

//1st way to import (Name Import)

//import { apiKey } from "./utils.js";
//console.log(apiKey); //Muhammad Ramzan Akram

//2nd way to import (Default Import)

// import apiKey from "./utils.js";
// console.log(apiKey); //Muhammad Ramzan Akram

//3rd way to import (As per Names)

// import { myName, myDaughterName, myWifeName } from "./utils.js";

// console.log(myName, myWifeName, myDaughterName); //Muhammad Ramzan Akram, Kanwal, Mirha

// //4th way to import (All things)

// import * as utils from "./utils.js";

// console.log(utils.myDaughterName, utils.default); //Mirha, Muhammad Ramzan Akram

// //5th way to import (Alisa Import)

// import { myWifeName as myBestFriend } from "./utils.js";
// console.log(myBestFriend); //Kanwal

//Video Num & Topic Name = 06. Revisiting Variables & Values

// let userMessage = "How are you.";
// console.log(userMessage);
// userMessage = "Hello World!";
// console.log(userMessage);

// const myName = "Muhammad Ramzan Akram";
// console.log(myName);
//myName = "Kamal"; //Variable declare with const cant update to other name this can be done by using let.

//Video Num & Topic Name = 07. Revisiting Operators
//Operators like NNSSBBU
// console.log(10 + 5);
// console.log(10 === 5);
// console.log(10 > 5);

//Video Num & Topic Name = 08. Revisiting Functions & Parameters

// function createGreetings(userName, userMessage = "How are you.") {
//   //   console.log(userName);
//   //   console.log(userMessage);
//   return "Hi i am " + userName + "," + " " + userMessage + ".";
// }

// const greetings1 = createGreetings(
//   "Muhammad Ramzan Akram",
//   "what are you doing."
// );
// console.log(greetings1);

// const greetings2 = createGreetings("Mirha", "Papa i am studying.");
// console.log(greetings2);

//Video Num & Topic Name = 09. Arrow Functions

// export default (userName, message) => {
//   console.log("Hello");
//   return userName + message;
// };

//Video Num & Topic Name = 11. Revisiting Objects & Classes

//Object

// const user = {
//   name: "Ramzan",
//   age: 34,
//   greet() {
//     console.log("Hello");
//     console.log(this.name);
//   },
// };

// console.log(user.age);
// user.greet();

// //Class

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hi!");
//   }
// }

// const user1 = new User("Mirha", 2.5);
// console.log(user1);

//Video Num & Topic Name = 12. Arrays & Array Methods like map()

// const hobbies = ["Sports", "Reading", "Freelancing"];

// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "Sports");

// console.log(index);

// const editedHobbies = hobbies.map((item) => ({ text: item }));

// console.log(editedHobbies);

//Video Num & Topic Name = 13. Destructuring

//First way of writing array

// const userNameData = ["Muhammad Ramzan", "Akram"];

// const firstName = [userNameData[0]];
// const lastName = [userNameData[1]];

// console.log(firstName);
// console.log(lastName);

//Second way of writing array

// const [firstName1, lastName1] = ["Mirha", "Ramzan"];

// console.log(firstName1);
// console.log(lastName1);

//First way of writing Object

// const user = {
//   name: "Ramzan",
//   age: 34,
// };

// const userName = user.name;
// const userAge = user.age;

// console.log(userName);
// console.log(userAge);

//Second way of writing Object

// const { name: myDaughterName, age } = {
//   name: "Mirha",
//   age: 2.5,
// };

// console.log(myDaughterName);
// console.log(age);

//Video Num & Topic Name = 15. The Spread Operator

// const hobbies = ["Learning", "Reading"];

// const newHobbies = ["Freelancing"];

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const user = {
//   name: "Ramzan",
//   age: 34,
// };

// const extendedUser = {
//   isAdmin: true,
//   ...user,
// };

// console.log(extendedUser);

//Video Num & Topic Name = 16. Revisiting Control Structures

// const password = prompt("To get access enter your password");

// if (password === "Hello") {
//   console.log("Hello Works!");
// } else if (password === "hello") {
//   console.log("hello works!");
// } else {
//   console.log("Access not granted.");
// }

// const hobbies = ["Sports", "Reading"];

// for (const hobby of hobbies) {
//   console.log(hobby);
// }

//Video Num & Topic Name = 17. Manipulating the DOM - Not With React! OK

//In react we don't do the above thing so we not required to learn it again here.

//Video Num & Topic Name = 18. Using Functions as Values

// function handleTimeOut() {
//   console.log("Time out");
// }

// const handleTimeOut1 = () => {
//   console.log("Time out again!!!");
// };

// setTimeout(handleTimeOut, 2000);
// setTimeout(handleTimeOut1, 3000);
// setTimeout(() => {
//   console.log("Timing out one more time");
// }, 4000);

//We can also pass function as a value other than the built in functions

// function greet(greetFn) {
//   greetFn();
// }

// greet((greetFn) => {
//   console.log("Hi from my side!");
// });

//Video Num & Topic Name = 19. Defining Functions Inside Of Functions

// function init() {
//   function greet() {
//     console.log("Hi i am a nested function");
//   }
//   greet();
// }

// init();

//Video Num & Topic Name = 20. Reference vs Primitive Values

let myAge = 33;
myName = 34;

//WE cannot edit the above myAge variable instead the last one go away from the memory and the new one is stored.

const usersData = ["Ramzan", "Hassan"];
usersData.push("Waqar");
console.log(usersData);

//Her above we edited the actual Array of userData.
