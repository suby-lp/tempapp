import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location) {
    return this.http.get(
      "http://api.weatherstack.com/current?access_key=68f68e768f8df027d6d8ec273049cd38&query=" +
        location
    );
  }
}
