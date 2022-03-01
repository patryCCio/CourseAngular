import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CONFIG, Config} from '../model';
import { Customer } from './model';


@Injectable()
export class CustomerService {

  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config) {}

  getCustomers(){
    return this.httpClient.get<Customer[]>(`${this.config.appUrl}/customers`);
  }

  createCustomer(customer: Customer){
    return this.httpClient.post(`${this.config.appUrl}/customers`, customer);
  }

  deleteCustomer(customer: Customer){
    return this.httpClient.delete(`${this.config.appUrl}/customers/${customer.id}`);
  }
}
