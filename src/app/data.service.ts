import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  [x: string]: any;
  
  constructor(private http: HttpClient) {  }
  getData(){
    let  url="https://api.mocki.io/v1/55766cf6";
    //https://api.mocki.io/v1/256a16f9"{home api}
    return this.http.get(url);
  }
  getData2(){
    let url2="https://api.mocki.io/v1/23e4a629";
    //https://api.mocki.io/v1/23e4a629"(blog post api)
    return this.http.get(url2);
  }
  // getData3(){
  //   let url3="https://api.mocki.io/v1/f3c3f5e5";
  //   //https://api.mocki.io/v1/f3c3f5e5
  //   return this.http.get(url3);
  // }
  
}
