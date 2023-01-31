import { Component, OnInit } from '@angular/core';
import { MahanewsapiService } from '../service/mahanewsapi.service';

@Component({
  selector: 'app-breakingnews',
  templateUrl: './breakingnews.component.html',
  styleUrls: ['./breakingnews.component.css']
})
export class BreakingnewsComponent implements OnInit {

  breakingNewsData:any;
  contentLoaded = false;

  constructor(private api:MahanewsapiService) { }

  ngOnInit(): void {
    
    setTimeout(()=>{
      this.contentLoaded = true;
    },2000)

      this.api.getBreakingNews().subscribe((res)=>{
          this.breakingNewsData = res.results
      })
  }



}
