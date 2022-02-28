import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Customer, CustomerType } from '../model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styles: [
  ]
})
export class CustomerDetailsComponent implements OnInit, OnDestroy, OnChanges{
  
  @Input() customer: Customer = {
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
  }
  @Output() shift = new EventEmitter();

  nameColor = "blue"
  isActive: boolean = true;
  showPhoto: boolean = false;
  counter: number = 0;
  counterHandle: number = 0;

  CustomerType = CustomerType;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Changes!");
  }

  ngOnInit(): void {
    console.log('init!');
   // setInterval(() => { this.counter++; }, 1000);
   // this.counterHandle = this.counter;
  }

  ngOnDestroy(): void{
    console.log('destroy!');
   // clearInterval(this.counterHandle);
  }

  changeColor() {
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
  }

  left(){
    this.shift.emit('left');
  }

  right(){
    this.shift.emit('right');
  }


}
