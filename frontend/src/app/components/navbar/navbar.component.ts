import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userPages: string[] = [
    '/profile',
    '/flats',
    '/assignments',
    '/shopping',
    '/billings',
    '/ranking',
  ];

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  getActualRoute() {
    return this.router.url;
  }

  checkIfActual(buttonName: string): string {
    let endPoint = this.getActualRoute();
    let buttonEndPintValue: string = '/' + buttonName;
    if (buttonEndPintValue == endPoint) {
      return 'color:#69f0af';
    } else {
      return '';
    }
  }

  checkIfMenu(): boolean {
    let endPoint = this.getActualRoute();
    if (this.userPages.includes(endPoint)) {
      return true;
    } else {
      return false;
    }
  }

  changePage(page: string): void {
    let navigatePage = '/' + page;
    this.router.navigate([navigatePage]);
  }

  logOutUser(): void {
    // TODO: ADD Auth service
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
