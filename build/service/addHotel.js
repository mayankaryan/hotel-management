"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hotels = void 0;
const hotel_1 = require("../model/hotel");
exports.hotels = [];
let hotel1 = new hotel_1.Hotel("IBIS", 1, "Hosur Road,Bengaluru", 10, 3000);
let hotel2 = new hotel_1.Hotel("Tulip", 2, "Hosur Road,Bengaluru", 10, 2000);
let hotel3 = new hotel_1.Hotel("Den", 3, "Hosur Road,Bengaluru", 15, 4000);
exports.hotels.push(hotel1);
exports.hotels.push(hotel2);
exports.hotels.push(hotel3);
console.log(exports.hotels.length);
for (let i = 0; i < exports.hotels.length; i++) {
    console.log(exports.hotels[i].name);
}
