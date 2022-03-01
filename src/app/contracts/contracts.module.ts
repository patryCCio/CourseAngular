import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractService } from './contract.service';
import { RouterModule } from '@angular/router';
import { ContractDetailsComponent } from './contract-details/contract-details.component';


const routes = [
  {path: 'contracts/list/:id', component: ContractDetailsComponent},
  {path: 'contracts/list', component: ContractListComponent}
]


@NgModule({
  declarations: [
    ContractListComponent,
    ContractDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    ContractService
  ],
  exports:[
    ContractListComponent
  ]
})
export class ContractsModule { }
