import { Component, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  @Input() name!:string;
  @Input() age!:number;
  @Input() status!:string;
  @Input() salary!:number;
  @Input() img!:string;

  @Output() myevent= new EventEmitter<string>();

  passData(){
    this.myevent.emit("Learning Angular")
  }
}
