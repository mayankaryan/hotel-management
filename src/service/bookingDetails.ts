import { Booking } from "../model/booking";

export let bookingData:Booking[] = [];

let booking1 = new Booking ("Mayank",1,"IBIS",1,7,3000);
bookingData.push(booking1);
console.log(bookingData.length);

for(let i=0;i<bookingData.length;i++){
    console.log(bookingData[i].hotel_name);
}