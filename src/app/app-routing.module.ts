import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import { BbcComponent } from './bbc/bbc.component';
import { BusinessComponent } from './business/business.component';
import { BreakingnewsComponent } from './breakingnews/breakingnews.component';
import { CryptonewsComponent } from './cryptonews/cryptonews.component';
import { TectnewsComponent } from './tectnews/tectnews.component';
import { SportnewsComponent } from './sportnews/sportnews.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './signup/signup.component';
import {SafeGuard} from './safe.guard';

const routes: Routes = [
  
  {
    path:'home',
    component:TopHeadlineComponent,
    canActivate: [SafeGuard]
  },
  {path:'bbc',component:BbcComponent,
    canActivate: [SafeGuard]},
  {path:'business',component:BusinessComponent,
    canActivate: [SafeGuard]},
  {path:'breaking',component:BreakingnewsComponent,
    canActivate: [SafeGuard]},
  {path:'crypto',component:CryptonewsComponent,
    canActivate: [SafeGuard]},
  {path:'tech',component:TectnewsComponent,
    canActivate: [SafeGuard]},
  {path:'sport',component:SportnewsComponent,
    canActivate: [SafeGuard]},
  {path:'login',component:LoginComponent},
  {path:'singup',component:SingupComponent},
  // {path:'**',pathMatch:'full', redirectTo:'/home'}
  {path:'',pathMatch:'full',redirectTo:'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
