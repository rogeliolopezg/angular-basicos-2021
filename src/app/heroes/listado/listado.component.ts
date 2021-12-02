import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent {
  heroes:string[] = ['Spiderman','Iroman','Batman','Hulk','Thor','Etrange'];
  heroeBorrado:string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
  }
} 
