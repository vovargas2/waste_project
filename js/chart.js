Highcharts.chart('container', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'US Municipal Solid Waste, 2018'
  },
  subtitle: {
    text: 'Source: <a href="https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/national-overview-facts-and-figures-materials#composting">EPA</a>'
  },
  xAxis: {
    categories: ['Per person', 'Household of Four', 'Total US Population'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    max: 2000,
    title: {
      text: 'Amount (pounds)',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    },
  },
  tooltip: {
    valueSuffix: ' pounds'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Each Day',
    data: [4.9, 19.6, 1613150684]
  }, {
    name: 'Each Year',
    data: [1788.5, 7154, 588800000000]
  }, ]
});
