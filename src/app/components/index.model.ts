export type IChartType = 'line';

export interface IChart {
  label: string;
  chartType: IChartType;
  data: [];
  labels: [];
}
