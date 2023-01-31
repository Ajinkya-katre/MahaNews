import { Component, OnInit } from '@angular/core';
import { MahanewsapiService } from '../service/mahanewsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  businessDisplay:any=[];
  contentLoaded = false;

  constructor(private _api:MahanewsapiService) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.contentLoaded = true;
    },2000)

    this._api.getBusinessNewsApi().subscribe((res)=>{
      this.businessDisplay=res.articles
    })

  }

}
