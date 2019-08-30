import { Component, OnInit } from '@angular/core';
import {Chartconstant} from "../chartconstant";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private chartConstant:Chartconstant) { }

  seriesData = [{
    name: 'John',
    data: [5, 3, 4, 7, 2]
  }, {
    name: 'Jane',
    data: [2, 2, 3, 2, 1]
  }, {
    name: 'Joe',
    data: [3, 4, 4, 2, 5]
  }];

  seriesData3 = new Map()
    .set('John',[5, 3, 4, 7, 2])
    .set('Jane',[2, 2, 3, 2, 1])
    .set('Joe',[3, 4, 4, 2, 5]);

  seriesData2 = new Map()
    .set('John',5)
    .set('Jane',9)
    .set('Joe',2);

  ngOnInit() {
  }

  changeData(){
    this.seriesData = [{
      name: 'Jane',
      data: [2, 2, 3, 2, 1]
    }, {
      name: 'Joe',
      data: [3, 4, 4, 2, 5]
    }];
  }

}
