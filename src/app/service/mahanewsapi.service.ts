import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MahanewsapiService {

  constructor(private http:HttpClient) {}
  // TOP HEADLINE API URL  
   topHeadlineNewsApi = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=8c8483f9aa26420aad652bd8fc93b02f';

   bbcNewsApi = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8c8483f9aa26420aad652bd8fc93b02f'
  
   getTopHeadlineNewsApi():Observable<any>{
    return this.http.get(this.topHeadlineNewsApi); 
  }

  getBbcNewsApi():Observable<any>{
    return this.http.get(this.bbcNewsApi)
  }


  }
