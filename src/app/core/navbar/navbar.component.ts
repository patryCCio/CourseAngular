import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth-guard.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  authHelper!: AuthService;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authHelper = this.authService;
  }

}
