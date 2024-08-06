"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../model/user");
let user = [];
let user1 = new user_1.User("Mayank", 1, "may@test", 22, "Male");
let user2 = new user_1.User("May", 2, "may@test", 22, "Male");
let user3 = new user_1.User("Aryan", 3, "may@test", 22, "Male");
let user4 = { name: "Ram", id: 4, email: "ram@test", age: 21, gender: "Male" };
user.push(user1);
user.push(user2);
user.push(user3);
user.push(user4);
console.log(user.length);
for (let i = 0; i < user.length; i++) {
    console.log(user[i].name);
}
