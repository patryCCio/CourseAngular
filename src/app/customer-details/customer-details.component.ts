import { Component, Input, OnInit } from '@angular/core';
import { Customer, CustomerType } from '../model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styles: [
  ]
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer = {
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
  }

  nameColor = "blue"
  isActive: boolean = true;
  showPhoto: boolean = false;

  CustomerType = CustomerType;

  constructor() { }

  ngOnInit(): void {
  }

  changeIsActive() {
    this.isActive = !this.isActive;
  }

  changeColor() {
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
  }


}
