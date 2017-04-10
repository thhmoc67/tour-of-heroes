import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

import { Router } from "@angular/router";

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css']
})
export class HeroesComponent implements OnInit{ 
  
  
  heroes: Hero[];
  selectedHero : Hero;

  constructor(
    private router: Router,
    private heroservice: HeroService
    ){}
  
  onSelect(hero:Hero): void{
    this.selectedHero=hero;
  }

 ngOnInit() :void{
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getHeroes();
  }

  getHeroes():void{
    this.heroservice.getHeroes().then(heroes => this.heroes= heroes); //callback function as an argument to the Promise's then() method:
    

  }

 goToDetail():void{
        this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

