import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor(private httpClient: HttpClient) {}

  /**
   * make http get request function
   * @param url url to make get request
   * @returns observable
   */
  makeGetRequest(url: string) {
    return this.httpClient.get(url);
  }
}
