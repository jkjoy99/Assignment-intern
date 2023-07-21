
// var options = {
//     noData: {
//         text: 'Loading...'
//     },
//     series: [{
//         name: 'PRODUCT A',
//         data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
//     }, {
//         name: 'PRODUCT B',
//         data: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]
//     }, {
//         name: 'PRODUCT C',
//         data: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80]
//     }],
//     chart: {
//         type: 'bar',
//         height: 350,
//         stacked: true,
//         toolbar: {
//             show: false
//         },
//         zoom: {
//             enabled: true
//         }
//     },
//     responsive: [{
//         breakpoint: 480,
//         options: {
//             legend: {
//                 position: 'bottom',
//                 offsetX: -10,
//                 offsetY: 0
//             }
//         }
//     }],
//     plotOptions: {
//         bar: {
//             horizontal: false,
//             borderRadius: 0,
//             dataLabels: {
//                 total: {
//                     enabled: false,
//                     style: {
//                         fontSize: '13px',
//                         fontWeight: 900
//                     }
//                 }
//             }
//         },
//     },
//     xaxis: {
//         type: 'number',
//         categories: ['20', '25', '30', '35', '40', '60', '65'],
//     },
//     legend: {
//         position: 'right',
//         offsetY: 40
//     },
//     fill: {
//         opacity: 1
//     }
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();



var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['20',"", '25',"", '30', "", '35', "", '40', "", "60","", "65"],
        datasets: [{
            label: '# of Votes',
            data: [1,2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            backgroundColor: [
                'rgb(8,0,163)',
               
            ],
            borderColor: [
              'rgb(8,0,163)',
             
            ],
            borderWidth: 3
        }]
    },
    options: {
        // scales: {
        //     y: {
        //         beginAtZero: true
        //     }
        // }
        responsive: true,
    }
});