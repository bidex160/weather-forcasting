import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../services/weather.service';
import { IChart } from '../components/index.model';
import { UtilService } from '../services/utils.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, ComponentsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent implements OnInit {
  weatherId: string = '';
  forecast: IChart = {
    chartType: 'line',
    label: 'Temperature',
    data: [],
    labels: [],
  };
  isloading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private weatherSer: WeatherService,
    private utilSer: UtilService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.weatherId = this.route.snapshot.params['id'];
    if (this.weatherId) this.fetchForecastData();
    else this.goBack();
  }

  /**
   * navigate back to home screen
   */
  goBack() {
    this.utilSer.openSnackBar('Forcast option not found');
    this.router.navigate(['/']);
  }

  /**
   * make a call to fetchForecast function in weather service to fetch forecast data
   */
  fetchForecastData() {
    this.isloading = true;
    this.weatherSer.fetchForecast(this.weatherId).subscribe({
      next: (response) => {
        this.forecast.labels =
          response?.map((forecast: any) => forecast.name) || [];
        this.forecast.data =
          response?.map((forecast: any) => forecast.temperature) || [];
        this.isloading = false;
      },
      error: (err) => {
        this.isloading = false;
        this.utilSer.openSnackBar(err?.detail || 'Please try again');
      },
    });
  }
}
