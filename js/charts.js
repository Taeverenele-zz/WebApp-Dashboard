
Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;

// LINE CHART //
var datasets = {
    hourlyDataset: [500, 1000, 700, 1500, 2000, 1500, 1700, 1000, 1200, 2000, 1700, 2100],
    dailyDataset: [100, 100, 700, 500, 1200, 1500, 2000, 1700, 1500, 2000, 1700, 1000],
    weeklyDataset: [700, 2000, 700, 1500, 2000, 1000, 1700, 1500, 700, 1000, 500, 100],
    monthlyDataset: [2000, 1700, 1500, 1000, 1500, 1200, 2100, 1000, 300, 100, 1000, 2100]
}

var ctx = document.getElementById("myLineChart");
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-7", "18-24", "25-31"],
        datasets: [{
            dislay: [false],
            labelString: [false],
            data: datasets.hourlyDataset,
            backgroundColor: 'rgba(226, 227, 246, 0.4)',
            borderColor: 'rgba(17, 134, 243, 1)',
            pointBackgroundColor: 'rgba(255, 255, 255, 1)',
            pointBorderWidth: 1.3,
            borderWidth: .5
        }]
    },
    options: {
      legend: {
      display: false
    },
      elements: {
        line: {
          tension: 0,
      }
    }
  }
});

// CHANGE LINE-CHART DATA
const updateChartData = (dataset) => {
    myLineChart.config.data.datasets[0].data = dataset;
    myLineChart.update();
}

const chartLabels = document.getElementsByClassName('chart-labels');
for(var i = 0; i < chartLabels.length; i += 1) {
    chartLabels[i].addEventListener('click', function(e) {
        updateChartData(datasets[e.target.attributes.name.value + 'Dataset']);
    });
}

//BAR CHART
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [{
          dislay: [false],
          labelString: [false],
          data: [75, 100, 175, 125, 225, 200, 100],
          backgroundColor: 'rgba(17, 134, 243, 1)',
          borderColor: 'rgba(17, 134, 243, 1)',
          borderWidth: 1
      }]
  },
        options: {
          legend: {
         display: false
      },
      scales: {
          yAxes: [{
              ticks: {
                  labelOffset: 20,
                  max: 250,
                  min: 0,
                  stepSize: 50
              }
          }]
      },
      scales: {
        xAxes: [{
            barPercentage: 0.5
        }]
    }
  }
});

// DOUGHNUT CHART
var ctx = document.getElementById("myDoughnutChart");
var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
      labels: ["Phones", "Tablets", "Desktop"],
      datasets: [{
          data: [50, 75, 150],
          backgroundColor: [
              'rgb(115, 119, 191)',
              'rgb(129, 201, 143)',
              'rgb(116, 177, 191)',
          ],
          borderColor: [
            'rgb(115, 119, 191)',
            'rgb(129, 201, 143)',
            'rgb(116, 177, 191)',
          ],
      }]
  },
  options: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 13,
      }
    }
  }
});