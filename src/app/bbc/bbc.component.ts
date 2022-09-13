import { Component, OnInit } from '@angular/core';
import { MahanewsapiService } from '../service/mahanewsapi.service';

@Component({
  selector: 'app-bbc',
  templateUrl: './bbc.component.html',
  styleUrls: ['./bbc.component.css']
})
export class BbcComponent implements OnInit {

  constructor(private maha:MahanewsapiService) { }

  bbcDisplay : any = []

  ngOnInit(): void {
    
    this.maha.getBbcNewsApi().subscribe((result)=>{
      this.bbcDisplay = result.articles
    })

  }

}
