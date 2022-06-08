import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnChanges, OnDestroy {

  @Input() name!: string;
  @Input() age!: number;
  @Input() status!: string;
  @Input() salary!: number;
  @Input() img!: string;
  @Input() title!: string;

  @Output() myevent = new EventEmitter<string>();

  passData() {
    this.myevent.emit("Learning Angular")
  }

  listnerRef = setInterval(() => { }, 1000)

  // 1 constructor call hota hai jab class kaa instance create hota hai
  constructor() {
    console.log('constructor', this.name);
    // properties initialized kr skte hai
  }

  // 2 this method has an access to all properties we defined 
  // whenever any property will change this method will get called
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngonChnages', changes);
  }

  // 3 ye call hota hai jab component pura ready ho jata hai tb
  ngOnInit() {
    console.log('ngoninit', this.name);
    this.listnerRef = setInterval(() => {
      console.log('timer running....');
    }, 2000)
    // properties
    // event listener register
    // initial data fetch - just like componentDidMount
  }
 
  //use when we want destroy component from dom
  ngOnDestroy() {
    console.log('component destroyed');
      clearInterval(this.listnerRef)
  }
}
