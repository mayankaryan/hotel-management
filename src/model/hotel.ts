interface hotelDetail{
    name:string;
    address:string;
    roomsCount:number;
    roomRent: number;
}

class Hotel implements hotelDetail {
    name:string;
    address:string;
    roomsCount:number;
    roomRent: number;

    constructor(name:string, address:string, roomsCount:number, roomRent:number){
        this.name = name;
        this.address = address;
        this.roomsCount = roomsCount;
        this.roomRent = roomRent;
    }
    
}