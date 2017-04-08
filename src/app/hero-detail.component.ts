import { Component, Input } from '@angular/core';
import { Hero } from './hero';


@Component({
 
    selector: 'hero-detail',
    template:`
                    <div *ngIf="hero">
                      <h2>
                          {{hero.name}} Details!!
                      </h2>
                      <div>
                        <label for="">id:</label>{{hero.id}}
                      </div>
                      <div>
                        <label for="">name:</label>
                        <input [(ngModel)]="hero.name" placeholder="name" type="text"/>
                      </div>
                    </div>
                `
})
export class HeroDetailComponent{

    
    @Input() hero: Hero;
        

}

