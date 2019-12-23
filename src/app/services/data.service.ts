import { Injectable } from '@angular/core';
import { sings } from '../../assets/data/data';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpClientModule} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {
listsings;
private url="https://swapi.co/api/films/";
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.listsings= sings.map((sings,i)=> sings);
  }
    async GetData() {
      let data =  this.http.get(this.url);
      const data_promise = data.toPromise();
      return data_promise; 
    }
}
