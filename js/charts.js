// LINE CHART
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            lineTension: 0,
            data: [500, 1000, 700, 1500, 2000, 1500, 1700, 1000, 1200, 2000, 1700, 2100],
            backgroundColor: 'rgba(226, 227, 246, 0.4)',
            borderColor: 'rgba(17, 134, 243, 1)',
            pointBackgroundColor: 'rgba(255, 255, 255, 1)',
            pointBorderWidth: 1.3,
            borderWidth: .5
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
// BAR CHART
var cty = document.getElementById("myBarChart");
var myBarChart = new Chart(cty, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: 'rgba(17, 134, 243, 1)'
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
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
var ctl = document.getElementById("myDoughnutChart");
var myDoughnutChart = new Chart(ctl, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: ['rgba(17, 134, 243, 1)',
            'rgba(110, 181, 192, 1)',
            'rgba(110, 118, 169, 1)']
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: true,
            position: 'right'
        },
        scales: {
            yAxes: [{
                display: false,
                gridLines: {
                    display:false
                },
                ticks: {
                    display:false                
                }
            }]
        }
    }
});