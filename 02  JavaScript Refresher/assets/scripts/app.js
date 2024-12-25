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
