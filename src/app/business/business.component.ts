import { Component, OnInit } from '@angular/core';
import { MahanewsapiService } from '../service/mahanewsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  businessDisplay:any=[];

  constructor(private _api:MahanewsapiService) { }

  ngOnInit(): void {

    this._api.getBusinessNewsApi().subscribe((res)=>{
      this.businessDisplay=res.articles
    })

  }

}
