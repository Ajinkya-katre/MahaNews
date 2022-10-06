import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import { BbcComponent } from './bbc/bbc.component';
import { BusinessComponent } from './business/business.component';
import { BreakingnewsComponent } from './breakingnews/breakingnews.component';
import { CryptonewsComponent } from './cryptonews/cryptonews.component';

const routes: Routes = [
  {path:'',component:TopHeadlineComponent},
  {path:'bbc',component:BbcComponent},
  {path:'business',component:BusinessComponent},
  {path:'breaking',component:BreakingnewsComponent},
  {path:'crypto',component:CryptonewsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
