import { Component, OnInit } from '@angular/core';
import { FelixStoreService } from '../felix-store.service';

import { Hero } from '../hero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 heroes: Hero[];
  //constructor() { }

  constructor(private felixstore : FelixStoreService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.felixstore.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
 // myItems;
  
}
