export class ChartConfig {
  id:string;
  chart: {};
  title: {};
  subtitle: {};
  tooltip: {};
  colors: String[];
  xAxis: {};
  yAxis: any[] = [];
  plotOptions: {};
  credits: {};
  legend: {} = {};
  responsive: {};
  insertChart(type:string='defaultCharts.ts'){
    this.chart = {
      type : type,
    }
  }

  insertTitle(text:String){
    this.title = {
      text : text
    }
  }

  insertSubtitle(){}

  insertTooltip(pointFormat=null){
    this.tooltip = {
      pointFormat : pointFormat
    }
  }

  insertColors(colors:String[] = ['#2196f3', '#2d756f', '#ef5350', '#26A69A', '#66BB6A', '#9CCC65', '#D4E157', '#FFCA28']){
    this.colors = colors
  }

  insertXAxis(categories = [] , titleText = ''){
    this.xAxis = {
      categories: categories,
      title: {
        text: titleText
      },
    }
  }

  insertYAxis(minValue = 0,titletext = '' , labelsFormat ='' , labelsOverflow = '' ){
    let attributeSet = {
      min : minValue,
      title: {
        text: titletext,
      },
      labels: {
        format: labelsFormat,
        overflow : labelsOverflow

      }
    };

    this.yAxis.push(attributeSet);
  }

  insertPlotOptions(seriesStacking:String ){
    this.plotOptions = {
      series: {
        stacking: seriesStacking
      }
    }
  }

  insertCredit(CreditEnable){
    this.credits = {
      enable : CreditEnable
    }
  }

  insertLegend(legendEnable){
    this.legend = {
      enable : legendEnable
    }
  }






}
