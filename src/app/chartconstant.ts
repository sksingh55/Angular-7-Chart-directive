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
  constructor() {
    let defaultChart:DefaultCharts = new DefaultCharts();
    this.chartObject1 = defaultChart.lineChart;
    this.chartObject2 = defaultChart.basicBarChart;
    this.chartObject3 = defaultChart.stackedBarChart;
    this.chartObject4 = defaultChart.columnBarChart;
    this.chartObject5 = defaultChart.stackedColumnBarChart;
    this.setChartObject6();
    this.setChartObject7();
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
    this.chartObject6.chartType = 'pie';
    this.chartObject6.size='80%';
    this.chartObject6.innersize='60%';
  }

  setChartObject7(){
    this.chartObject7 = new ChartConstants();
    this.chartObject7.datakeys = ['John','Jane'];

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
    this.chartObject7.chartType = 'bar';
  }
}




