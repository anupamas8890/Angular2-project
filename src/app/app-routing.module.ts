import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule , Routes} from '@angular/router' ;
import { ItemDetailsComponent } from './item-details/item-details.component';


const routes : Routes =[
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path:'item/:id', component: ItemDetailsComponent}
 // { path: 'about-us', component: AboutUsComponent },
  //{ path: 'contact-us', component: ContactUsComponent },
  //{ path: 'faq', component: FaqComponent }

  
];



@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
