import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Config, CONFIG } from '../model';
import { Contract } from './model';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  getContract(){
    return this.httpClient.get<Contract[]>(`${this.config.appUrl}/contracts`);
  }

  getContracts(id: number){
    return this.httpClient.get<Contract>(`${this.config.appUrl}/contracts/${id}`);
  }
}
