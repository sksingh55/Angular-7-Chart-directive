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

  Data3 = new Map()
    .set('2019',5)
    .set('2018',5)
    .set('2017',1)
    .set('2016',5)
    .set('2015',5);
  Data4 = new Map()
    .set('2019',5)
    .set('2018',5)
    .set('2017',1)
    .set('2016',4)
    .set('2015',5);
  seriesData3 = new Map()
    .set("demo",this.Data3);

  seriesData2 = new Map()
    .set('John',5)
    .set('Jane',9)
    .set('Joe',2);

  seriesData4 = new Map()
       .set('Number of schools', [25412, 23457, 24574, 25841, 25124]);

  seriesData5 = new Map()
       .set('Boys', [1226, 1829, 1120, 4571, 1921])
       .set('Girls', [3254, 1526, 5120, 2323, 5187])
       .set('Co-Education',[2160, 4187, 2155, 4241,4130]);

  seriesData6 = new Map()
      .set('Telgu', [3954, 2457, 4574, 5841, 2124])
      .set('Hindi', [3812, 3457, 7574, 6841, 7124])
      .set('Oriya', [4412, 3057, 4574, 5841, 7124])
      .set('English', [1412, 2957, 4974, 6841, 8124]);

  seriesData7 = new Map()
      .set('Yes', [33.2,33.2,33.2,33.2,33.2,33.2,33.2,33.2,33.2,33.2])
      .set('No', [12.8,12.8,12.8,12.8,1,12.8,12.8,12.8,12.8,12.8])
      .set('Partial', [54.0,54.0,54.0,54.0,54.0,54.0,54.0,54.0,54.0,54.0]);
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
