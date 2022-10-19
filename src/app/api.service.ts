import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewBooks=()=>{
    return this.http.get("")
  }
  addBooks=(data:any)=>{
    return this.http.post("",data)
  }
}
