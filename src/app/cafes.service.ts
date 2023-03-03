import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CafesService {

  constructor(private http:HttpClient) { }

  getproductos():any{
  //  return this.http.get('http://127.0.0.1:8000/api/productosall/');
    return this.http.get('https://arquitecturaback-production.up.railway.app/api/productosall/');
  }
}
