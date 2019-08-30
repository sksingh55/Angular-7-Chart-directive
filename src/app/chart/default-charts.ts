import {ChartConfig} from "./chart-config";

export class DefaultCharts {
  lineChart:ChartConfig = new ChartConfig();
  basicBarChart:ChartConfig = new ChartConfig();
  stackedBarChart:ChartConfig = new ChartConfig();
  columnBarChart:ChartConfig = new ChartConfig();
  stackedColumnBarChart:ChartConfig = new ChartConfig();
  defaultChartList  = new Map();

  constructor() {
    this.setLineChart();
    this.setBasicBarChart();
    this.setStackedBarChart();
    this.setColumnBarChart();
    this.setStackedColumnBarChart();
  }
  private setLineChart(){
    this.lineChart.insertChart('line');
    this.lineChart.insertTitle("Default Line Chart");
    this.lineChart.insertColors();
    this.lineChart.insertYAxis( 0,"Default y Axis");
    this.lineChart.insertLegend(true);
    this.lineChart.plotOptions = {
                                series: {
                                  label: {
                                    connectorAllowed: false
                                  },
                                  pointStart: 2010
                                }
                              };
    this.defaultChartList.set("line",this.lineChart);
  }
  private setBasicBarChart(){
      this.basicBarChart.insertChart('bar');
      this.basicBarChart.insertTitle('Default Bar Chart');
      this.basicBarChart.insertYAxis(0,"Default Y Axis");
      this.basicBarChart.insertColors();
      this.basicBarChart.insertLegend(true);
      this.basicBarChart.plotOptions =  {
                                          bar: {
                                            dataLabels: {
                                              enabled: true
                                            }
                                          }
                                        };
    this.defaultChartList.set("bar",this.basicBarChart);
  }

  private setStackedBarChart() {
    this.stackedBarChart.insertChart('bar');
    this.stackedBarChart.insertTitle('Default Stacked Bar Chart');
    this.stackedBarChart.insertYAxis(0, "Default Stacked Chart");
    this.stackedBarChart.insertColors();
    this.stackedBarChart.legend = {
                                    reversed: true
                                  };
    this.stackedBarChart.plotOptions = {
                                          series: {
                                            stacking: 'normal'
                                          }
                                        };
    this.defaultChartList.set("StackedBar",this.stackedBarChart);
  }


  private setColumnBarChart() {
    this.columnBarChart.insertChart('column');
    this.columnBarChart.insertTitle('Default Column Bar Chart');
    this.columnBarChart.insertYAxis(0, "Default Column Chart");
    this.columnBarChart.insertColors();
    this.columnBarChart.plotOptions = {
                                        column: {
                                          pointPadding: 0.2,
                                          borderWidth: 0
                                        }
                                      };
    this.defaultChartList.set("column",this.stackedBarChart);
  }
  private setStackedColumnBarChart() {
    this.stackedColumnBarChart.insertChart('column');
    this.stackedColumnBarChart.insertTitle('Stacked Column Bar Chart');
    this.stackedColumnBarChart.insertYAxis(0, "Default Column Chart");
    this.stackedColumnBarChart.insertColors();
    this.stackedColumnBarChart.plotOptions = {
                                              column: {
                                                stacking: 'normal',
                                                dataLabels: {
                                                  enabled: true
                                                }
                                              }
                                            };
  }

}
