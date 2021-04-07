import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) {  }
  getData(){
    let  url="https://api.mocki.io/v1/256a16f9";
    return this.http.get(url);
  }
  getData2(){
    let url2="https://api.mocki.io/v1/e65ea4fc";
    return this.http.get(url2);
  }
}
