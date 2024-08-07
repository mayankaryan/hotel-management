import { Hotel } from "../model/hotel";

export let hotels:Hotel[] = [];

let hotel1 = new Hotel ("IBIS",1,"Hosur Road,Bengaluru",10,3000);
let hotel2 = new Hotel ("Tulip",2,"Hosur Road,Bengaluru",10,2000);
let hotel3 = new Hotel ("Den",3,"Hosur Road,Bengaluru",15,4000);

hotels.push(hotel1);
hotels.push(hotel2);
hotels.push(hotel3);

console.log(hotels.length);

for(let i=0;i < hotels.length; i++){
    console.log(hotels[i].name);
}