import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
//import {  } from 'rxjs';

@Injectable( )
export class FelixStoreService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
   // this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
   // this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}