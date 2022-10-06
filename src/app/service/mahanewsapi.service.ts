import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MahanewsapiService {

  constructor(private http:HttpClient) {}
  // TOP HEADLINE API URL  
   topHeadlineNewsApi:string = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=8c8483f9aa26420aad652bd8fc93b02f';

   bbcNewsApi:string = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8c8483f9aa26420aad652bd8fc93b02f'

   businessNewsApi:string = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8c8483f9aa26420aad652bd8fc93b02f'
   
    breakingNews:string = 'https://newsdata.io/api/1/news?apikey=pub_119411f3db3ab70e608e1d2c0b7b5a6ae63de&q=pune&language=en'

    cryptoNews:string  = 'https://newsdata.io/api/1/news?apikey=pub_119411f3db3ab70e608e1d2c0b7b5a6ae63de&language=en'
   
    techNews:string = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8c8483f9aa26420aad652bd8fc93b02f"

    sportNews:string = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8c8483f9aa26420aad652bd8fc93b02f'

    getSportNews():Observable<any>{
        return this.http.get(this.sportNews)
    }

    getTopHeadlineNewsApi():Observable<any>{
    return this.http.get(this.topHeadlineNewsApi); 
  }

  getBbcNewsApi():Observable<any>{
    return this.http.get(this.bbcNewsApi)
  }

  getBusinessNewsApi():Observable<any>{
    return this.http.get(this.businessNewsApi)
  }
  getBreakingNews():Observable<any>{
    return this.http.get(this.breakingNews)
  }

  getCryptoNews():Observable<any>{
    return this.http.get(this.cryptoNews)
  }

  getTechNews():Observable<any>{
    return this.http.get(this.techNews)
  }

  }
