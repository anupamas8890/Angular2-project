import { Component, OnInit } from '@angular/core';
import { FelixStoreService } from '../felix-store.service';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { Item } from '../hero';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { ItemQuantity } from '../items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 items: Item[];
 totalAmount : number=0; 
 result:number =0;

  constructor(private route : ActivatedRoute, private felixstore : FelixStoreService) {  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.felixstore.getHeroes()
    .subscribe(items => this.items = items);
  }

  AddToCart() {
    this.items.forEach((item, index) => {     
        this.result+= item.item_price*item.quantity; 
     });
    
     this.totalAmount=this.result;
    this.result=0;
   return (this.totalAmount);
    //return of(this.totalAmount);
       

  } 
 // myItems;

 
  
}
