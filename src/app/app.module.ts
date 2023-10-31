import { NgModule } from '@angular/core';  // Importing the NgModule decorator from Angular core.
import { BrowserModule } from '@angular/platform-browser';  // Importing the BrowserModule module for web applications.

import { AppRoutingModule } from './app-routing.module';  // Importing the AppRoutingModule for routing configuration.
import { AppComponent } from './app.component';  // Importing the main application component.
import { LoginComponent } from './login/login.component';  // Importing the LoginComponent.
import { HomeComponent } from './home/home.component';  // Importing the HomeComponent.
import { HeaderComponent } from './header/header.component';  // Importing the HeaderComponent.
import { MovieComponent } from './movie/movie.component';  // Importing the MovieComponent.
import { FormsModule } from '@angular/forms';  // Importing FormsModule for form-related functionality.
import { HttpClientModule } from '@angular/common/http';  // Importing HttpClientModule for making HTTP requests.
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  // Importing NgbModule for using the Bootstrap UI library.
import { FeatureModule } from './feature/feature.module';  // Importing a feature module.

@NgModule({
  declarations: [  // List of components that belong to this module.
    AppComponent,  // The main application component.
    LoginComponent,  // The LoginComponent.
    HomeComponent,  // The HomeComponent.
    HeaderComponent,  // The HeaderComponent.
    MovieComponent  // The MovieComponent.
  ],
  imports: [  // List of modules that this module depends on.
    BrowserModule,  // The browser-specific module for web applications.
    AppRoutingModule,  // The routing configuration module.
    FormsModule,  // The module for working with forms.
    HttpClientModule,  // The module for making HTTP requests.
    NgbModule,  // The module for Bootstrap UI components.
    FeatureModule  // A feature module for additional functionality.
  ],
  providers: [],  // Array of services and dependencies provided by this module.
  bootstrap: [AppComponent]  // The root component of the application.
})
export class AppModule { }  // The main module of the Angular application.
