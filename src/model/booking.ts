class Booking {
    user_name:string;
    user_id:number;
    hotel_name:string;
    hotel_id:number;
    total_days: number;
    total_price:number;

    constructor(user_name: string,user_id:number,hotel_name:string,hotel_id:number,total_days:number,total_price:number) {
        this.user_name = user_name;
        this.user_id = user_id;
        this.hotel_name = hotel_name;
        this.hotel_id = hotel_id;
        this.total_days = total_days;
        this.total_price = total_price;
    }
}