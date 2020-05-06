import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { from } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero:Hero={
    id:1,
    name:'Dr Strange'
  };

  constructor() { }

  ngOnInit() {
  }

  

}
