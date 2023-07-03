
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  login: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.login = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  log(): void {
    const usuario: Usuario = {
      nombreUsuario: this.login.value.usuario,
      password: this.login.value.password
    };
    // this.loading = true;
    // this.loginService.login(usuario).subscribe(data => {
    //   this.loading = false;
    //   this.loginService.setLocalStorage(data.token);
    //   this.router.navigate(['/dashboard']);
    //   this.toastr.success('Ha iniciado sesion correctamente'); 
    //   this.login.reset();

    //   }, error => {
    //     console.log(error);
    //     this.loading = false;
    //     this.toastr.error(error.error.message, 'Error',);
    //     this.login.reset();
    //   })

  }

}
