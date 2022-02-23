import { Component } from '@angular/core';
import { Customer } from './model';


//<input type="text" [(ngModel)]="customer.name" />

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h1 [class.isActive] = "isActive" [style.color] = "nameColor">{{customer.name}}</h1>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-sm-6">
            <p>{{ customer.description }}</p>
            <p>Wiek: {{ customer.age }}</p>
            <p>Adres: {{ customer.address.street }} {{ customer.address.houseNumber }}, {{ customer.address.city }}</p>
            <button class="btn btn-primary" (click)="changeIsActive()" type="button">Przełącz podkreślenie</button>
            <button class="btn btn-primary" (click)="changeColor()" type="button">Przełącz kolor</button>
          </div>
          <div class="col-sm-6">
              <img [src] = customer.photoUrl/>
          </div>    
        </div>   
      </div>
    </div>
  </div>
  `,
  styles: ['.isActive{ text-decoration: underline; }']
})
export class AppComponent {
  customer: Customer = {
    name: "Jan Kowalski",
    photoUrl: "assets/img/elegancko.jpg",
    age: 34,
    description: "Very important client",
    address:{
      street: "Zielona",
      houseNumber: 5,
      city: "Warszawa"
    }

  };

  nameColor = "blue"
  isActive: boolean = true

  constructor(){
      
  }

  changeIsActive(){
    this.isActive = !this.isActive;
  }

  changeColor(){
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
