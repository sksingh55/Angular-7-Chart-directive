import {ChartConfig} from "./chart/chart-config";
import {DefaultCharts} from "./chart/default-charts";
import {ChartConstants} from "./chart/chart-constants";

export class Chartconstant {
  chartObject1 : ChartConfig;
  chartObject2 : ChartConfig;
  chartObject3 : ChartConfig;
  chartObject4 : ChartConfig;
  chartObject5 : ChartConfig;
  chartObject6 : ChartConstants;
  chartObject7 : ChartConstants;
  chartObject8 : ChartConstants;
  chartObject9 : ChartConstants;
  chartObject10 : ChartConstants;
  chartObject11 : ChartConstants;
  constructor() {
    let defaultChart:DefaultCharts = new DefaultCharts();
    this.chartObject1 = defaultChart.lineChart;
    this.chartObject2 = defaultChart.basicBarChart;
    this.chartObject3 = defaultChart.stackedBarChart;
    this.chartObject4 = defaultChart.columnBarChart;
    this.chartObject5 = defaultChart.stackedColumnBarChart;
    this.setChartObject6();
    this.setChartObject7();
    this.setChartObject8();
    this.setChartObject9();
    this.setChartObject10();
    this.setChartObject11();
  }

 setChartObject11(){
   this.chartObject11 = new ChartConstants();
   this.chartObject11.colors = {
     'Yes' : '#5C6BC0',
     'No'  : '#42A5F5',
     'Partial' : '#26C6DA'
   };
   this.chartObject11.chartType = 'bar',
   this.chartObject11.xAxis = ['Water', 'Building', 'Electricity', 'Teacher Furniture', 'Staff-Room', 'Student Furniture',
        'Library', 'Boundary Wall', 'Staffroom and Head Master room', 'Playground'];
   this.chartObject11.tooltips ={
           headerFormat: '<b>{point.x}</b><br/>',
           pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
       };
    this.chartObject11.plotOptions = {
            series: {
                stacking: 'normal'
            }
        };
 }


  setChartObject10(){
    this.chartObject10 = new ChartConstants();
    this.chartObject10.colors = {
      'Telgu'  : '#5C6BC0',
      'Hindi'  : '#42A5F5',
      'Oriya'  : '#26C6DA',
      'English': '#26A69A'
    };
    this.chartObject10.chartType = 'spline';
    this.chartObject10.xAxis = ['2015', '2016', '2017', '2018', '2019'];
    this.chartObject10.yAxisTitle = 'Number of schools';
    this.chartObject10.plotOptions = {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        };
    this.chartObject10.legend = {
                enabled: true
    };
  }








 setChartObject9(){
   this.chartObject9 = new ChartConstants();
   this.chartObject9.colors = {
     "Boys" : "#5C6BC0",
     "Girls": "#42A5F5",
     "Co-Education" : "#26C6DA"
   };
   this.chartObject9.legend = {
                                 enabled : false
                               };
   this.chartObject9.chartType = 'column';
   this.chartObject9.plotOptions = {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: 'white'
                }
            }
        };
    this.chartObject9.legend = {
            reversed: false
        };
    this.chartObject9.xAxis = ['2015', '2016', '2017', '2018', '2019'];
    this.chartObject9.yAxisTitle = 'Number of schools';
    this.chartObject9.tooltips= {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        }
    this.chartObject9.datalabels = {
                    enabled: false,
                    color: 'white'
                };
    this.chartObject9.stacking = "normal";
 }
 setChartObject8(){
   this.chartObject8 = new ChartConstants();
   this.chartObject8.colors = {
     "Number of schools": "#5C6BC0",
   };
   this.chartObject8.legend = {
                                 enabled : false
                               };
    this.chartObject8.chartType = 'spline';
    this.chartObject8.plotOptions = {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false,
                }
            };
    this.chartObject8.xAxis = ['2015','2016','2017','2018','2019'];
    this.chartObject8.yAxisTitle = 'Number of schools';
 }

  setChartObject6(){
    this.chartObject6 = new ChartConstants();
    this.chartObject6.colors= {
                                "John" : "#2196f3",
                                "Jane" : "#664477",
                                "Joe" : "#222547"
                              };
    this.chartObject6.labels = {
                                  "John" : "John Score",
                                  "Jane" : "Jane Score",
                                  "Joe" : "Joe Score"
                                };
    this.chartObject6.legend = {
                                  "fontsize" : "14px"
                                };
    this.chartObject6.sliced = {
      'John' : false,
      'Jane' : true
    };
    this.chartObject6.chartType = 'pie';
    this.chartObject6.size='80%';
    this.chartObject6.innersize='60%';
    this.chartObject6.plotOptions = {
                                      pie: {
                                        allowPointSelect: true,
                                        cursor: 'pointer',
                                        dataLabels: {
                                          enabled: true,
                                          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                        }
                                      }
                                    };
  }

  setChartObject7(){
    this.chartObject7 = new ChartConstants();
    this.chartObject7.datakeys = ['John','Jane','Joe'];
    this.chartObject7.colors= {
                                "John" : "#2196f3",
                                "Jane" : "#664477",
                                "Joe" : "#222547"
                              };
    this.chartObject7.labels = {
                                "John" : "John Score",
                                "Jane" : "Jane Score",
                                "Joe" : "Joe Score"
                              };
    this.chartObject7.legend = {
                                  "fontsize" : "14px"
                                };
    this.chartObject7.chartType = 'column';
    this.chartObject7.stacking = 'normal';
    this.chartObject7.yAxisTitle = " saruav"
  }
}
