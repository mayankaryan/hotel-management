import { User } from "./model/user";
import { user } from "./service/addUser";
import { hotels } from "./service/addHotel";


function bookingHotel() {
    let hotelName = "IBIS";
    let guestId = 0;

    if(checkAvailablity(hotelName)){
        guestId = enterUserDetails();
    }
    else{
        console.log("not available :(");
    }
}

function checkAvailablity(hotelName:string): boolean{
    for(let i=0;i<hotels.length; i++){
        if(hotelName == hotels[i].name){
            if(hotels[i].roomsCount > 0){
                return true;
            }
        }
    }
    return false;
}

function enterUserDetails(): number {
    let guestName = "Mayank";

    for(let i = 0; i<user.length; i++){
        if(guestName == user[i].name){
            return user[i].id;
        }
    }

    
    return user.length;
}