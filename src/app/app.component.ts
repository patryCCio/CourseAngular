import { Component } from '@angular/core';
import { Customer, CustomerType } from './model';


//<input type="text" [(ngModel)]="customer.name" />

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="panel panel-default">
      <div class="panel-body">
      <select [(ngModel)]="customer">
        <option *ngFor="let c of customers" [ngValue]="c">{{c.name}}</option>
      </select>
      </div>
      <div class="panel-heading">
        <h1 [class.isActive] = "isActive" [style.color] = "nameColor">{{customer.name}}
          <ng-container [ngSwitch]="customer.type">
            <ng-container *ngSwitchCase="CustomerType.Standard">*</ng-container>
            <ng-container *ngSwitchCase="CustomerType.Premium">**</ng-container>
            <ng-container *ngSwitchCase="CustomerType.VIP">***</ng-container>
          </ng-container>
        </h1>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-sm-8">
            <p>{{ customer.description }}</p>
            <p>Wiek: {{ customer.age }}</p>
            <p>Adres: {{ customer.address.street }} {{ customer.address.houseNumber }}, {{ customer.address.city }}</p>
            
            <ul>
              <li *ngFor="let category of customer.categories">{{category}}</li>
            </ul>
            
            <button class="btn btn-primary" (click)="changeIsActive()" type="button">Przełącz podkreślenie</button>
            <button class="btn btn-primary" (click)="changeColor()" type="button">Przełącz kolor</button>
          </div>
          <div class="col-sm-4">
            <div class="checkbox">
              <label><input type="checkbox" [(ngModel)]="showPhoto">Pokaż zdjęcie</label>
            </div>
            <div *ngIf="showPhoto; then photo else noPhoto"></div>
            <ng-template #noPhoto>
              <p>Zdjęcie ukryte</p>
            </ng-template>
            <ng-template #photo>
              <img [src] = customer.photoUrl/>
            </ng-template>
          </div>    
        </div>   
      </div>
    </div>
  </div>
  `,
  styles: ['.isActive{ text-decoration: underline; }']
})
export class AppComponent {
  customers: Customer[] = [
    {
      name: "Jan Kowalski",
      photoUrl: "assets/img/elegancko.jpg",
      age: 34,
      description: "Very important client",
      address: {
        street: "Zielona",
        houseNumber: 5,
        city: "Warszawa"
      },
      type: CustomerType.Premium,
      categories: [
        "zagraniczny",
        "mikroprzedsiębiorstwo",
        "duży obrót"
      ]
    },

    {
      name: "Agata Czarna",
      photoUrl: "assets/img/elegancko.jpg",
      age: 21,
      description: "Important client",
      address: {
        street: "Chmielna",
        houseNumber: 16,
        city: "Wrocław"
      },
      type: CustomerType.Standard,
      categories: [
        "zagraniczny",
        "Wpływy zagraniczne",
        "duży obrót"
      ]
    },

    {
      name: "Adam Pękała",
      photoUrl: "assets/img/elegancko.jpg",
      age: 41,
      description: "Very important client",
      address: {
        street: "Grójecka",
        houseNumber: 32,
        city: "Grójec"
      },
      type: CustomerType.VIP,
      categories: [
        "zagraniczny",
        "mikroprzedsiębiorstwo",
        "duży obrót",
        "firma na skalę światową"
      ]
    },
  ]

  customer: Customer = this.customers[0];

  nameColor = "blue"
  isActive: boolean = true;
  showPhoto: boolean = false;

  CustomerType = CustomerType;

  constructor() {

  }

  changeIsActive() {
    this.isActive = !this.isActive;
  }

  changeColor() {
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
