
import ReactApexChart from 'react-apexcharts';

const MonthlyStats = () => {
    const options = {
      series: [
        {
          name: '2022',
          data: [32,52, 22, 44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: '2023',
          data: [12, 34, 64, 76, 85, 101, 98, 87, 105, 91, 114, 94],
        },       
      ],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        title: {
          text: 'customers per month',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return  val + ' customers ';
          },
        },
      },
    };
  
    return (
      <div id="chart">
        <ReactApexChart options={options} series={options.series} type="bar" height={480} />
      </div>
    );
  };
  
  export default MonthlyStats;