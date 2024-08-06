
class Hotel {
    name:string;
    id: number;
    address:string;
    roomsCount:number;
    roomRent: number;

    constructor(name:string,id:number, address:string, roomsCount:number, roomRent:number){
        this.name = name;
        this.id = id;
        this.address = address;
        this.roomsCount = roomsCount;
        this.roomRent = roomRent;
    }

}