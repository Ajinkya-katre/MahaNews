import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import { HttpClientModule} from '@angular/common/http';
import { MahanewsapiService } from './service/mahanewsapi.service';
import { BbcComponent } from './bbc/bbc.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadlineComponent,
    BbcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
    
  ],
  providers: [MahanewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
