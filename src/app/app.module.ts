import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { WelcomeComponent } from './components/auth/welcome/welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChangePasswordComponent } from './components/dashboard/change-password/change-password.component';
import { CuestionariosComponent } from './components/dashboard/cuestionarios/cuestionarios.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    WelcomeComponent,
    DashboardComponent,
    ChangePasswordComponent,
    CuestionariosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
