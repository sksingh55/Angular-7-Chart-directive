import {Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';
import {ChartConstants} from "./chart-constants";

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
  sliced : boolean;
}

class LineObject {
  name:any;
  data:any[]=[];
  color:any;
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
  @Input() chartData2 : Object;

  chart = {
    chart: {},
    title: {},
    subtitle:{},
    tooltips: {},
    colors: [],
    xAxis: {},
    yAxis: {},
    plotOptions: {},
    credits: {},
    legend: {},
    series: [],
    responsive :{},
  };
  @ViewChild('chart',{read:ElementRef,static:true}) chartId : ElementRef;

  ngOnInit() {
  }

  ngOnChanges(changes : SimpleChanges){
    this.setChart(this.chartConfig2,this.chartData2);
    this.chartId.nativeElement.id = this.id;
    Highcharts.chart(this.id, this.chart);
  }


  private setChart(chartConstant:ChartConstants , chartData){
    if(!chartConstant){
      return {};
    }

    this.insertChartTitle(chartConstant.chartTitle);
    if(!chartConstant.datakeys || chartConstant.datakeys.length === 0){
      chartConstant.datakeys = this.getDataKeysFromData(chartData);
    }
    if(chartConstant.stacking){
      this.chart.plotOptions= {
                          series: {
                            stacking: chartConstant.stacking
                          }
                        };
    }
    if(chartConstant.plotOptions){
      this.chart.plotOptions = chartConstant.plotOptions;
    }
    this.chart['tooltip'] = chartConstant.tooltips ? chartConstant.tooltips : {};
    this.chart['datalabels'] = chartConstant.datalabels ? chartConstant.datalabels : {};
    this.chart['legend'] = chartConstant.legend ? chartConstant.legend : {};
    this.chart['credits'] = false;
    if(chartConstant.chartType == 'donut' || chartConstant.chartType == 'pie') {
      this.formatterForPieAndDonutChart(chartConstant,chartData);
    }
    else{
      this.chart['xAxis'] = this.insertxAxis(chartConstant.xAxis,chartData);
      this.formatterForChartOtherThanPieAndDonut(chartConstant,chartData,this.chart.xAxis['categories']);
    }
    console.log("final Chart object for chart id" , this.id, " is", this.chart);
  }

  private getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
  private getDataKeysFromData(chartData){
    let datakeys = [];
    for(let key of Object.keys(chartData)){
      datakeys.push(key);
    }
    return datakeys;
  }

  private insertxAxis(xAxis:any,chartData){
    if(!xAxis){
      xAxis = this.getXAxisFromData(chartData);
    }
    let xAxisList = [];
    for(let value of xAxis){
      xAxisList.push(value);
    }
    let xAxisObject ={
      categories:xAxisList
    };
    return xAxisObject;

  }

  private getXAxisFromData(chartData){
    let xAxis = new Set();
    for(let key of Object.keys(chartData)){
      for(let xaxis of Object.keys(chartData[key])){
        xAxis.add(xaxis);
      }
    }
    return xAxis;
  }

  private insertChartTitle(chartTitle){
    if(chartTitle){
                  this.chart['title']={
                    text : chartTitle
                  };
                }
  }

  private formatterForPieAndDonutChart(chartConstant:ChartConstants , chartData){
    let seriesdata = [];
    this.chart.chart = {
                          type : 'pie'
                        };

    for(let keys of Object.keys(chartData)){
      for(let key2 of Object.keys(chartData[keys])){
        let obj = new PieObject();
        obj.name = (chartConstant.labels && chartConstant.labels[key2]) ? chartConstant.labels[key2] : key2;
        obj.y = chartData[keys][key2];
        if(chartConstant.colors && chartConstant.colors[key2]){
          obj.color = chartConstant.colors[key2];
        }
        else{
          obj.color = this.getRandomColor();
        }
        if(chartConstant.chartType == 'donut'){
          obj.size=chartConstant.size;
          obj.innerSize=chartConstant.innersize;
        }
        if(chartConstant.sliced&& chartConstant.sliced[keys]) {
          obj.sliced = chartConstant.sliced[keys];
        }
        seriesdata.push(obj);
      }
    }
    this.chart.series.push({
                            data:seriesdata
                          });
  }


  private formatterForChartOtherThanPieAndDonut(chartConstant:ChartConstants , chartData , xAxis){
    this.chart.chart = {
      type : chartConstant.chartType
    };

    for(let keys of Object.keys(chartData)) {
      let seriesObject = new LineObject();
      seriesObject.name = keys;
      if (chartConstant.colors[keys]){
        seriesObject.color = chartConstant.colors[keys];
      }else{
        seriesObject.color = this.getRandomColor();
      }
      for(let key2 of xAxis){
        seriesObject.data.push(chartData[keys][key2]);
      }
      this.chart.series.push(seriesObject);
    }

    this.chart.yAxis = {
      title : {
        text:chartConstant.yAxisTitle
      }
    };

  }

}
