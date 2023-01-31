import { Component, OnInit } from '@angular/core';
import { MahanewsapiService } from '../service/mahanewsapi.service';

@Component({
  selector: 'app-tectnews',
  templateUrl: './tectnews.component.html',
  styleUrls: ['./tectnews.component.css']
})
export class TectnewsComponent implements OnInit {

  techDisplay:any=[];
  contentLoaded = false;

  constructor(private api:MahanewsapiService) { }

  ngOnInit(): void {
    
    setTimeout(()=>{
      this.contentLoaded = true;
    },2000)
    
      this.api.getTechNews().subscribe((res)=>{
        this.techDisplay = res.articles;
      })
  }

}
