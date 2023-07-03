import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebPR';
  listStudent: any[] = [
    {name:'Jimmy', status:"Activo"},
    {name:'Camilo', status:"Activo"},
    {name:'Mauricio', status:"Bajo amenazas"},
    {name:'Santiago', status:"Retirado"},
    {name:'Pedro', status:"Activo"},

  ]
}
