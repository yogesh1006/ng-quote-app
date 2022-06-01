import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:"./app.component.html",
  styleUrls:["./app.component.css"]
})

export class AppComponent {
  users =[
    {name:"yogesh",age:25, status:"single",salary:2500,img:"assets/u1.jpg"},
    {name:"ramesh",age:45, status:"married",salary:3500,img:"assets/u2.jpg"},
    {name:"suresh",age:35, status:"commited",salary:5000,img:"assets/u3.png"}
  ]

  receivedData(e:any){
   console.log(e);
   
  }
}
