import { Component, OnInit } from '@angular/core';
import { MahanewsapiService } from '../service/mahanewsapi.service';

@Component({
  selector: 'app-cryptonews',
  templateUrl: './cryptonews.component.html',
  styleUrls: ['./cryptonews.component.css']
})
export class CryptonewsComponent implements OnInit {

  cryptoData:any;

  constructor(private api:MahanewsapiService) { }

  ngOnInit(): void {
    this.api.getCryptoNews().subscribe((res)=>{
      console.log(res.results)
      this.cryptoData = res.results
    })
  }

}
