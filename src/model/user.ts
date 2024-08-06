interface userDetails{
    name:string;
    email:string;
    age:number;
    gender:string;
}

class User implements userDetails {
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