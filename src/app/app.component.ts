import { Component } from '@angular/core';


//<input type="text" [(ngModel)]="customer.name" />

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.isActive{ text-decoration: underline; }']
})
export class AppComponent {

  constructor() {
  }
  
}
