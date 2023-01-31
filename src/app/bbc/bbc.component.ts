import { Component, OnInit } from '@angular/core';
import { MahanewsapiService } from '../service/mahanewsapi.service';

@Component({
  selector: 'app-bbc',
  templateUrl: './bbc.component.html',
  styleUrls: ['./bbc.component.css']
})
export class BbcComponent implements OnInit {

  constructor(private maha:MahanewsapiService) { }
  contentLoaded= false;
  bbcDisplay : any = []

  ngOnInit(): void {
    
    setTimeout(()=>{
      this.contentLoaded = true;
    },2000)

    this.maha.getBbcNewsApi().subscribe((result)=>{
      this.bbcDisplay = result.articles
    })

  }

}
