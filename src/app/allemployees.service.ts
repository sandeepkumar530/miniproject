import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllemployeesService {

  constructor(private _httpClint:HttpClient) { }
  baseUrl:string="https://6572df5d192318b7db412dfe.mockapi.io/employees";
  getAllemployeess():Observable<any>{
    return this._httpClint.get("https://6572df5d192318b7db412dfe.mockapi.io/employees")
  }
  deleteAllemployees(id:any):Observable<any>{
    return this._httpClint.delete(this.baseUrl+"/"+id);
  }
  getAllemployees(id:any):Observable<any>{
    return this._httpClint.get(this.baseUrl+"/"+id);
  }
  getFilterdAllemployeess(term:any):Observable<any>{
    return this._httpClint.get(this.baseUrl+"?filter="+term);
  }
  getSortedAllemployeess(column:any,order:any):Observable<any>{
    return this._httpClint.get(this.baseUrl+"?sortBy="+column+"&order="+order);
  }
  getPaginatedAllemployeess(limit:any,page:any):Observable<any>{
    return this._httpClint.get(this.baseUrl+"?limit="+limit+"&page="+page)
  }
}
