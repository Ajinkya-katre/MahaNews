import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import { BbcComponent } from './bbc/bbc.component';
import { BusinessComponent } from './business/business.component';
import { BreakingnewsComponent } from './breakingnews/breakingnews.component';
import { CryptonewsComponent } from './cryptonews/cryptonews.component';
import { TectnewsComponent } from './tectnews/tectnews.component';
import { SportnewsComponent } from './sportnews/sportnews.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/home'},
  {path:'home',component:TopHeadlineComponent},
  {path:'bbc',component:BbcComponent},
  {path:'business',component:BusinessComponent},
  {path:'breaking',component:BreakingnewsComponent},
  {path:'crypto',component:CryptonewsComponent},
  {path:'tech',component:TectnewsComponent},
  {path:'sport',component:SportnewsComponent},

  {path:'**',pathMatch:'full', redirectTo:'/home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
