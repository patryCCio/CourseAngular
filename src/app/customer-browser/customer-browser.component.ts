import { Component, OnInit } from '@angular/core';
import { Customer, CustomerType } from '../model';

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styles: [
  ]
})
export class CustomerBrowserComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
