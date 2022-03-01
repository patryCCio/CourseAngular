import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContractsModule } from "./contracts/contracts.module";
import { CoreModule } from "./core/core.module";
import { NotFoundComponent } from "./core/not-found/not-found.component";
import { CustomerModule } from "./customers/customer.module";
import { CONFIG, Config } from "./model";


const routes: Routes = [
  {path: '', redirectTo:'customers', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
]

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
    CustomerModule,
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: CONFIG, useValue: config}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
