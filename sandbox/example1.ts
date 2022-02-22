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

class Customer extends Person{
    advisor: string;

    constructor(name: string, age:number, advisor: string){
        super(name, age);
        this.advisor = advisor;
    }
}


let customer = new Customer("Jan", 45, "Agata");

console.log(customer);
console.log(customer.welcome());