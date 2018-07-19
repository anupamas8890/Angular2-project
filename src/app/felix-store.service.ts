import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { of } from 'rxjs/observable/of';
import { Item } from './hero';
import { ITEMS } from './mock-heroes';
import { ItemQuantity } from './items';
//import {  } from 'rxjs';

@Injectable( )
export class FelixStoreService {

  constructor() { }

  getHeroes() {
        return of(ITEMS);
  }

  getHero(id: number) {   
    return of(ITEMS.find(hero => hero.id === id));
  }

  addToCart(id, values) {

  }
}
