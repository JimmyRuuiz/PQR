import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { WelcomeComponent } from './components/auth/welcome/welcome.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CuestionariosComponent } from './components/dashboard/cuestionarios/cuestionarios.component';
import { ChangePasswordComponent } from './components/dashboard/change-password/change-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/Auth', pathMatch: 'full' },
  {
    path: 'Auth', component: AuthComponent, children: [
      { path: '', component: WelcomeComponent, },
      { path: 'Login', component: LoginComponent },
      { path: 'Register', component: RegisterComponent },
      { path: 'ForgotPassword', component: ForgotPasswordComponent },
    ]
  },
  {
    path: 'Dashboard', component: DashboardComponent, children: [
      { path: '', component: CuestionariosComponent, },
      { path: 'ChangePassword', component: ChangePasswordComponent },
    ]
  },
  { path: '**', redirectTo: '/Auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
