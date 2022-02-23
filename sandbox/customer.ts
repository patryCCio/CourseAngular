class Person{
	name: string;
	age: number;

	constructor(name: string, age:number){
		this.name = name;
		this.age = age;
	}

	welcome(){
		console.log(`Hello ${this.name}, ${this.age}`);
	}

}

export class Customer extends Person{
    advisor: string;

    constructor(name: string, age:number, advisor: string){
        super(name, age);
        this.advisor = advisor;
    }

}