import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Toast, ToastrService } from 'ngx-toastr';
import { GroupByOptionsWithElement } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
// import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  register: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder,
    private router: Router
  ) {

    this.register = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmpassword: ['']
    }, { validator: this.checkpassword });
  }

  ngOnInit(): void {
  }

  // registrarUsuario(): void{
  //   console.log(this.register);

  //   const usuario: Usuario = {
  //     nombreUsuario : this.register.value.usuario,
  //     password : this.register.value.password
  //   };
  //   this.loading=true;
  //   setTimeout(() => {
  //     this.usuarioService.saveUser(usuario).subscribe(data =>  {
  //       console.log(data);
  //       this.toastr.success('El usuario ' + usuario.nombreUsuario + ' se ha registrado con exito!', 'Usuario Registrado');
  //       this.router.navigate(['/inicio/login']);
  //       this.loading=false; 
  //     }, error => {
  //       this.loading=false;
  //       console.log(error);
  //       this.toastr.error(error.error.message, 'Error');
  //       this.register.reset();
  //     }
  //       )}, 2000);
  // }

  checkpassword(group: FormGroup): any {
    const pass = group.controls['password'].value;
    const confirmPass = group.controls['confirmpassword'].value;
    return pass === confirmPass ? null : { notSame: true };
  }

}
