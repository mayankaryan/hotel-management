"use strict";
// let user=[];
Object.defineProperty(exports, "__esModule", { value: true });
// let user1 : User = {name:"Mayank",id:1,email:"may@test",age:22,gender:"Male"};
// user.push( user1);
const user_1 = require("../model/user");
let user = [];
let user1 = new user_1.User("Mayank", 1, "may@test", 22, "Male");
let user2 = new user_1.User("May", 2, "may@test", 22, "Male");
let user3 = new user_1.User("Aryan", 3, "may@test", 22, "Male");
user.push(user1);
user.push(user2);
user.push(user3);
console.log(user.length);
for (let i = 0; i < user.length; i++) {
    console.log(user[i].name);
}
