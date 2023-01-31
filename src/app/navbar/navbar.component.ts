import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any;
  menus = ["Top News", "BBC", "Business", "Breaking News","Crypto News", "Tech News", "Sport News"]
  today = new Date();
  pipe = new DatePipe('en-IN');
  changedDate:any = '';
  constructor(
    private router:Router
  ) { 
    console.log(localStorage.getItem('user'))
    if(localStorage.getItem('user'))
    {
      let data = localStorage.getItem('user');
      this.user = data;
    }
    else
    {
      this.user= null;
    }
  }

  ngOnInit(): void {
  }

  changeFormant(){
    let changeFormant = this.pipe.transform(this.today, 'dd/mm/yyyy');
    this.changedDate = changeFormant;
    console.log(this.changedDate)

  }
  
  logout()
  {
    localStorage.clear();
    this.user= null;
    this.router.navigate(['/login']);
  }
}
