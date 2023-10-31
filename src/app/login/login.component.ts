import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: './login.component.scss'
})
export class LoginComponent implements OnInit {
  // Declare class properties
  username = "";
  password = "";
  errorMsg = "";

  // Constructor for LoginComponent, injecting AuthService and Router
  constructor(private auth: AuthService, private router: Router) { }

  // Lifecycle hook: ngOnInit
  ngOnInit(): void {
    // Initialization code can go here (currently empty)
  }

  // Login function triggered by a button click
  login() {
    // Check if the username is empty
    if (this.username.trim().length === 0) {
      this.errorMsg = "Username is required";
    } else if (this.password.trim().length === 0) {
      // Check if the password is empty
      this.errorMsg = "Password is required";
    } else {
      this.errorMsg = ""; // Clear any previous error message
      // Attempt to log in using the AuthService
      let res = this.auth.login(this.username, this.password);
      if (res === 200) {
        // If login is successful (status code 200), navigate to the home page
        this.router.navigate(['home']);
      }
      if (res === 403) {
        // If login is unsuccessful (status code 403), display an error message
        this.errorMsg = "Invalid Credentials";
      }
    }
  }
}
