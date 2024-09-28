import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesesService {
  apiKey: string = "b851048d6f75aa66f80c7057c081b881";
  constructor(private http: HttpClient) { }
  getAllSeries() {
    return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=en-US&page=1`);
  }

  getSeriesDetails(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${this.apiKey}&language=en-US`);
  }
}
