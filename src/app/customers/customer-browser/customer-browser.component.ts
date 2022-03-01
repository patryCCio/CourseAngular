import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../model';

@Component({
  selector: 'cus-customer-browser',
  templateUrl: './customer-browser.component.html',
  styles: [
  ]
})
export class CustomerBrowserComponent implements OnInit {
  
  customers: Customer[] = [];
  customer!: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.refresh();
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

  deleteCustomer(){
    this.customerService.deleteCustomer(this.customer).subscribe(
      () => {
        console.log("Udało się usunąć klienta!");
        this.refresh()
      },
      () => {
        console.log("Problem z połączeniem z bazą danych!");
      }
    );
  }

  private refresh(){
    this.customerService.getCustomers().subscribe(response => {
      this.customers = response;
      this.customer = this.customers[0];
    });
  }

}
