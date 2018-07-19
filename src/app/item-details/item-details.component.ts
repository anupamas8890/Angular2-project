import { Component, OnInit, Input } from '@angular/core';
import { FelixStoreService } from '../felix-store.service';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { Item }  from '../hero';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  @Input() item: Item;

  myItems; 
  constructor(private route : ActivatedRoute, private felixstore : FelixStoreService) {  }
  ngOnInit(): void {
    this.getHero();
  }

    getHero(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.felixstore.getHero(id)
        .subscribe(item => this.item = item);
    }
}
  

