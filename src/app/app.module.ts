import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContractsModule } from "./contracts/contracts.module";
import { CustomerModule } from "./customers/customer.module";
import { CONFIG, Config } from "./model";


const config: Config = {
  customerLimit: 10,
  appUrl: 'http://localhost:13378'
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ContractsModule,
    CustomerModule
  ],
  providers: [
    {provide: CONFIG, useValue: config}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
