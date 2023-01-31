import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import { HttpClientModule} from '@angular/common/http';
import { MahanewsapiService } from './service/mahanewsapi.service';
import { BbcComponent } from './bbc/bbc.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { BusinessComponent } from './business/business.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import { BreakingnewsComponent } from './breakingnews/breakingnews.component';
import { CryptonewsComponent } from './cryptonews/cryptonews.component';
import { TectnewsComponent } from './tectnews/tectnews.component';
import { SportnewsComponent } from './sportnews/sportnews.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingupComponent } from './signup/signup.component'

@NgModule({
  declarations: [
    AppComponent,
    TopHeadlineComponent,
    BbcComponent,
    BusinessComponent,
    BreakingnewsComponent,
    CryptonewsComponent,
    TectnewsComponent,
    SportnewsComponent,
    NavbarComponent,
    LoginComponent,
    SingupComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [MahanewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
