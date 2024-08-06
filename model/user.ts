interface User{
    name:string;
    email:string;
    age:number;
    gender:string;
}

class Person implements User {
    name:string;
    email: string;
    age: number;
    gender: string;
    constructor(name:string, email:string, age:number, gender:string){
        this.name = name;
        this.email = email;
        this.age = age;
        this.gender = gender;
    }

} 