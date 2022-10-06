import { Component, OnInit } from '@angular/core';
import { MahanewsapiService } from '../service/mahanewsapi.service';

@Component({
  selector: 'app-sportnews',
  templateUrl: './sportnews.component.html',
  styleUrls: ['./sportnews.component.css']
})
export class SportnewsComponent implements OnInit {

  sportDisplay:any = [];

  constructor(private api:MahanewsapiService) { }

  ngOnInit(): void {

    this.api.getSportNews().subscribe((res)=>{
      this.sportDisplay = res.articles
    })

  }

}
