import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import { BbcComponent } from './bbc/bbc.component';

const routes: Routes = [
  {path:'',component:TopHeadlineComponent},
  {path:'bbc',component:BbcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
