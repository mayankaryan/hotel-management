import {User} from '../model/user'

let user = [];

let user1 = new User("Mayank",1,"may@test",22,"Male");
let user2 = new User("May",2,"may@test",22,"Male");
let user3 = new User("Aryan",3,"may@test",22,"Male");

user.push(user1);
user.push(user2);
user.push(user3);

console.log(user.length);

for(let i = 0;i <user.length;i++){
    console.log(user[i].name);
}