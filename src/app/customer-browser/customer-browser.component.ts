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
      description: "Dzwonić co każdy wtorek",
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
      description: "Sponsor, utrzymywać relację, oferty",
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
      description: "Klient B2B, przedstawiciel",
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

  onShift(direction: string){
    const idx = this.customers.indexOf(this.customer);
    if(idx > 0 && direction === 'left'){
      this.customer = this.customers[idx - 1];
    } else if(idx < this.customers.length-1 && direction === 'right'){
      this.customer = this.customers[idx + 1];
    } else if(idx == 0){
      this.customer = this.customers[this.customers.length-1];
    } else if(idx == this.customers.length-1){
      this.customer = this.customers[0];
    }
  }

}
