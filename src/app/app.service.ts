import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public getAllLaunches(): Observable<any> {
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100`);
  }
}
