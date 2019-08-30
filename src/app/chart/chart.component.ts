import {Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';
import {formatDate} from "@angular/common";
import {DefaultCharts} from "./default-charts";
import {ChartConstants} from "./chart-constants";
import {ajax} from "rxjs/ajax";

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);


class PieObject {
  name:String;
  y:number;
  color:String;
  size:String;
  innerSize:String;
}



@Component({
  selector: 'app-chart',
  templateUrl : './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  @Input() chartConfig:any;
  @Input() chartConfig2:any;
  @Input() id:string;
  @Input() chartData:any[];
  @Input() chartData2 = new Map();

  defaultCharts = new DefaultCharts();
  @ViewChild('chart',{read:ElementRef,static:true}) chartId : ElementRef;
  chart : any;

  ngOnInit() {
  }

  ngOnChanges(changes : SimpleChanges){
    console.log(this.chartData2);
    if(this.chartConfig2){
      console.log("cdscdsc");
      this.chart = this.setChart2(this.chartConfig2,this.chartData2);
    }else {
      console.log("scdscdacaddvav");
      this.chart = this.setChart(this.chartConfig, this.chartData);
    }
    this.chartId.nativeElement.id = this.id;
    Highcharts.chart(this.id, this.chart);
  }




  configChart() {
    let chart = {
      chart: {},
      title: {},
      subtitle:{},
      tooltips: {},
      colors: [],
      xAxis: {},
      yAxis: [],
      plotOptions: {},
      credits: {},
      legend: {},
      series: [],
      responsive :{},
    };
    return chart;
  }

  setChart(chartObject , data){
    let chart = this.configChart();
    chart['chart'] = chartObject['chart'];
    chart['title'] = chartObject['title'];
    chart['subtitle'] = chartObject['subtitle'];
    chart['tooltips'] = chartObject['tooltips'];
    chart['colors'] = chartObject['colors'];
    chart['xAxis'] = chartObject['xAxis'];
    chart['yAxis'] = chartObject['yAxis'];
    chart['plotOptions'] = chartObject['plotOptions'];
    chart['credits'] = chartObject['credits'];
    chart['legend'] = chartObject['legend'];
    chart['responsive'] = chartObject['responsive'];
    chart['colors'] = chartObject['colors'];
    chart['series']=  this.formatData(data);
    return chart;
  }

  formatData(data:any){
    let series : any = [];
    for(let val of data){
      series.push(val);
    }
    console.log(series);
    return data;
  }




  setChart2(chartConstant:ChartConstants , chartData){
    let chart = this.configChart();
    let datakeys = chartConstant.datakeys;
    let colors = chartConstant.colors;
    let labels = chartConstant.labels;
    let size = chartConstant.size;
    let innerSize = chartConstant.innersize;
    let tooltip = chartConstant.tooltips;
    let datalabels = chartConstant.datalabels;
    let legend = chartConstant.legend;
    let charttype = chartConstant.chartType;
    let xaxiskey = chartConstant.xAxis;
    if(!chartConstant){
      return {};
    }
    if(!chartConstant.xAxis){
      chart['xAxis'] = {};
    }

    let seriesdata = [];
    if(charttype == 'donut' || charttype == 'pie') {
      chart.chart = {
        type : 'pie'
      };
      if(!datakeys || datakeys.length === 0){
        datakeys = this.getDataKeysFromData(chartData);
      }
      for (let key of datakeys) {
        let obj = new PieObject();
        obj.name = (labels && labels[key]) ? labels[key] : key;
        obj.y = chartData.get(key);
        if(colors && colors[key]){
          obj.color = colors[key];
        }
        if(charttype == 'donut'){
          obj.size=size;
          obj.innerSize=innerSize;
        }
        seriesdata.push(obj);
      }
      chart.series.push({
        data:seriesdata
      });

    }

    else if(charttype === 'bar' || charttype === 'column') {
      //Data formatting for bar and column charts
      chart.chart = {
        type : charttype
      };
      console.log("i am in bar");
      if (!datakeys || datakeys.length === 0) {
        datakeys = this.getDataKeysFromData(chartData);
      }
      for(let key of datakeys){
        chart.series.push({
          name : key,
          data : chartData.get(key),
          color: colors[key]
        });
      }
      chart.yAxis.push({
        title : "fvfgb"
      })
    }


    chart.xAxis = xaxiskey;
    chart['tooltip'] = tooltip ? tooltip : {};
    chart['datalabels'] = datalabels ? datalabels : {};
    chart['legend'] = legend ? legend : {};
    console.log("final Cahrt" , chart);
    return chart;
  }

  getDataKeysFromData(chartData){
    console.log(chartData);
    let datakeys = [];
    for(let key of chartData.keys()) {
      console.log(chartData.get(key))
      if (chartData.has(key)) {
        datakeys.push(key);
      }
    }
    return datakeys;

  }
}
