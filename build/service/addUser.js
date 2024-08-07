"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const user_1 = require("../model/user");
exports.user = [];
let user1 = new user_1.User("Mayank", 1, "may@test", 22, "Male");
let user2 = new user_1.User("May", 2, "may@test", 22, "Male");
let user3 = new user_1.User("Aryan", 3, "may@test", 22, "Male");
let user4 = { name: "Ram", id: 4, email: "ram@test", age: 21, gender: "Male" };
exports.user.push(user1);
exports.user.push(user2);
exports.user.push(user3);
exports.user.push(user4);
console.log(exports.user.length);
for (let i = 0; i < exports.user.length; i++) {
    console.log(exports.user[i].name);
}
