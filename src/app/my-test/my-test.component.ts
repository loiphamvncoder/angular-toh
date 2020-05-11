import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss']
})
export class MyTestComponent implements OnInit {

  // numX='loi pham';
  // x=2;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
ss

  constructor() { }



  ngOnInit() {
    // this.callAlert();
  }

  callAlert():void{
    // alert(this.numX + ' ' +this.x);
  }
  
}
