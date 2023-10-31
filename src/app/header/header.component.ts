import { Component } from '@angular/core';  // Importing the Component decorator from Angular core.
import { AuthService } from '../services/auth.service';  // Importing the AuthService for authentication.
import { Router } from '@angular/router';  // Importing the Router for navigation.

@Component({
  selector: 'app-header',  // The component's selector used in HTML templates.
  templateUrl: './header.component.html',  // The HTML template file for this component.
  styleUrls: ['./header.component.scss']  // The styles or CSS file for this component.
})
export class HeaderComponent {

  constructor(private router: Router, private auth: AuthService) {  // Constructor for the HeaderComponent, injecting Router and AuthService.
  }

  ngOnInit(): void {
  }

  goToHome() {  // Custom method to navigate to the home page.
    this.router.navigate(['home']);  // Using the Router service to navigate to the 'home' route.
  }

  logout() {  // Custom method to log out the user.
    this.auth.logout();  // Calling the `logout` method from the AuthService.
  }
}

