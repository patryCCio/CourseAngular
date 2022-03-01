import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerModule } from '../customers/customer.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    CustomerModule
  ],
  exports: [
    NavbarComponent
  ],
  providers:[
    AuthGuard,
    AuthService
  ]
})
export class CoreModule { }
