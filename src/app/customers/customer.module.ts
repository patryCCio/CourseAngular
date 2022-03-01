import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerBrowserComponent } from './customer-browser/customer-browser.component';
import { CustomerService } from './customer.service';
import { FormsModule } from '@angular/forms';

export interface Customer{
  id?: number;
  name: string;
  photoUrl: string;
  description: string;
  age: number;
  address: Address;
  type: CustomerType;
  categories: string[];
}

export interface Address {
  street: string;
  houseNumber: number;
  city: string;
}

export enum CustomerType{
  Standard,
  Premium,
  VIP
}

@NgModule({
  declarations: [
    CustomerAddComponent,
    CustomerDetailsComponent,
    CustomerBrowserComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    CustomerAddComponent,
    CustomerBrowserComponent
  ],
  providers:[
    CustomerService
  ]
})
export class CustomerModule { }
