
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maha';

  today = new Date();
  pipe = new DatePipe('en-IN');
  changedDate:any = '';
  changeFormant(){
    let changeFormant = this.pipe.transform(this.today, 'dd/mm/yyyy');
    this.changedDate = changeFormant;
    console.log(this.changedDate)

  }
  

}
