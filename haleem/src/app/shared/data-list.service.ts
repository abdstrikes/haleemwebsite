import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';
import { Varieties } from './varieties.model';

@Injectable({
  providedIn: 'root'
})
export class DataListService {

  constructor(private http: HttpClient) { }
  url = "https://haleemwebsite-zaiqa-default-rtdb.firebaseio.com/ListOfVarieties"

  getListOfVarities() {
    return this.http.get(this.url+".json");
  }

  deleteItem(id: number ){
    return this.http.delete(this.url+"/"+id+".json");
  }
}

// https://haleemwebsite-zaiqa-default-rtdb.firebaseio.com/