"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingData = void 0;
const booking_1 = require("../model/booking");
exports.bookingData = [];
let booking1 = new booking_1.Booking("Mayank", 1, "IBIS", 1, 7, 3000);
exports.bookingData.push(booking1);
console.log(exports.bookingData.length);
for (let i = 0; i < exports.bookingData.length; i++) {
    console.log(exports.bookingData[i].hotel_name);
}
