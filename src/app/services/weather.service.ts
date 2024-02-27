import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private networkSer: NetworkService) {}

  /**
   * make a call to get forecast endpoint
   * @param id weather id
   * @returns observable
   */
  fetchForecast(id: string) {
    let url = `https://api.weather.gov/gridpoints/${id}/31,80/forecast`;
    return this.networkSer
      .makeGetRequest(url)
      .pipe(map((res: any) => res?.properties?.periods || []));
  }
}
