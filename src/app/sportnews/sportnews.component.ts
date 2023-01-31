import { Component, OnInit } from '@angular/core';
import { MahanewsapiService } from '../service/mahanewsapi.service';

@Component({
  selector: 'app-sportnews',
  templateUrl: './sportnews.component.html',
  styleUrls: ['./sportnews.component.css']
})
export class SportnewsComponent implements OnInit {

  sportDisplay:any = [];
  contentLoaded  = false;

  constructor(private api:MahanewsapiService) { }

  ngOnInit(): void {

    setTimeout(()=>{
      this.contentLoaded = true;
    },2000)

    this.api.getSportNews().subscribe((res)=>{
      this.sportDisplay = res.articles
    })

  }

}
