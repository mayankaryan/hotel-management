"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hotel_1 = require("../model/hotel");
let hotels = [];
let hotel1 = new hotel_1.Hotel("IBIS", 1, "Hosur Road,Bengaluru", 10, 3000);
let hotel2 = new hotel_1.Hotel("Tulip", 2, "Hosur Road,Bengaluru", 10, 2000);
let hotel3 = new hotel_1.Hotel("Den", 3, "Hosur Road,Bengaluru", 15, 4000);
hotels.push(hotel1);
hotels.push(hotel2);
hotels.push(hotel3);
console.log(hotels.length);
for (let i = 0; i < hotels.length; i++) {
    console.log(hotels[i].name);
}
