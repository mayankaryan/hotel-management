
export class User {
    name:string;
    id: number;
    email: string;
    age: number;
    gender: string;

    constructor(name:string, id:number, email:string, age:number, gender:string){
        this.name = name;
        this.id = id;
        this.email = email;
        this.age = age;
        this.gender = gender;
    }
} 