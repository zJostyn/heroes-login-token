import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})

export class SearchComponent implements OnInit{

  heroes:any[] = []
  dato:string = '';

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.dato = params ['dato'];
      this.heroes = this._heroesService.buscarHeroes(params ['dato']);
      console.log(this.heroes);
    });
  }
  
  verHeroe(idx: number){
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }

}
