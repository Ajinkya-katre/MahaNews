import { Component, OnInit } from '@angular/core';
import { MahanewsapiService } from '../service/mahanewsapi.service';
@Component({
  selector: 'app-top-headline',
  templateUrl: './top-headline.component.html',
  styleUrls: ['./top-headline.component.css']
})
export class TopHeadlineComponent implements OnInit {
  contentLoaded = false;

  constructor(private _api:MahanewsapiService) { }

  topHeadlineData : any = [];


  ngOnInit(): void {
    
    setTimeout(()=>{
      this.contentLoaded = true;
    },2000)
    
    this._api.getTopHeadlineNewsApi().subscribe((res)=>{
      // console.log(res.articles);
      this.topHeadlineData = res.articles;
    })

  }




}
