import { Component } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {
  
  constructor(private _heroesService:HeroesService){}

  nHeroe:Heroe[] = [];

  enviarHeroe(Nom:string, Bio:string, Img:string, Apa:string, Casa:string) {
    this.nHeroe = [{
      nombre: Nom,
      bio: Bio,
      img:  Img,
      aparicion: Apa,
      casa:  Casa
    }];
    this._heroesService.addHeroe(this.nHeroe);
  }

}
