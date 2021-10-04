import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  heroes: string[] = ['Spider-Man', 'Ironman', 'Hulk', 'Viuda Negra', 'Falcon', 'Capitan America'];
  heroeBorrado: string = '';
   borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    
  }



}
