import { Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';
import { IChart, IChartType } from '../index.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  @Input() chartType: IChartType = 'line';
  __forcastData: IChart = {
    chartType: 'line',
    label: 'Temperature',
    data: [],
    labels: [],
  };
  @Input() set forecastData(v: IChart) {
    this.__forcastData = v;
    this.generateChart();
  }
  chart: any = [];

  constructor() {}

  /**
   * generate chart with given data
   */
  generateChart() {
    let bgColors = this.__forcastData.labels.map(() => this.setBg());
    this.chart = new Chart('ChartEl', {
      type: this.chartType,
      data: {
        labels: this.__forcastData.labels,
        datasets: [
          {
            label: this.__forcastData.label,
            data: this.__forcastData.data,
            backgroundColor: bgColors,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 14,
              },
            },
          },
        },
      },
    });
  }

  /**
   * generate random colors
   * @returns string of color code
   */
  setBg() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + randomColor;
  }
}
