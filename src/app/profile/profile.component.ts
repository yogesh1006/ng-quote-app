import { Component} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  name: string = "YOgesh";
  age: number = 23;
  status: string = "coder";
  salary: number = 100;
  
  btnColor:string = "btn btn-primary";
  isDisabled:boolean = true;

  inputValue:string = "Yogesh";

  constructor() {

    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);

    const colors = ["btn-primary" ,"btn-secondary","btn-success","btn-danger","btn-dark" ]

    this.btnColor = "btn " + colors[Math.floor(Math.random() * 5)]
  }

  convertToInr() {
    alert(this.salary * 74)
  }

  getInput(e:any){
     this.inputValue = e.target.value;
  }

}
