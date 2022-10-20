import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = environment.URL +'educacion/';

  constructor(private httClient : HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httClient.get<Educacion[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.httClient.get<Educacion>(this.URL + `detail/${id}`);
  }

  public save(educacion:Educacion):Observable<any>{
    return this.httClient.post<any>(this.URL + 'create',educacion);
  }

  public update(id: number,educacion: Educacion):Observable<any>{
    return this.httClient.put<any>(this.URL+`update/${id}`,educacion);
  }

  public delete(id:number):Observable<any>{
    return this.httClient.delete<any>(this.URL+`delete/${id}`);
  }

}
