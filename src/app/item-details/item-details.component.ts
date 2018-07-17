import { Component, OnInit, Input } from '@angular/core';
import { FelixStoreService } from '../felix-store.service';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  @Input() hero: Hero;

  myItems;
 
  myParams={};
  constructor(private route : ActivatedRoute, private felixstore : FelixStoreService , private location: Location) {  }
  ngOnInit(): void {
    this.getHero();
  }

    getHero(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.felixstore.getHero(id)
        .subscribe(hero => this.hero = hero);
    }
}
  

