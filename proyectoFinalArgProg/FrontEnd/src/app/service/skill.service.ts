import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  URL = environment.URL +'hys/';

  constructor(private httClient: HttpClient) { }

  public lista(): Observable<Skill[]>{
    return this.httClient.get<Skill[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Skill>{
    return this.httClient.get<Skill>(this.URL + `detail/${id}`);
  }

  public save(skill:Skill):Observable<any>{
    return this.httClient.post<any>(this.URL + 'create',skill);
  }

  public update(id: number,skill: Skill):Observable<any>{
    return this.httClient.put<any>(this.URL+`update/${id}`,skill);
  }

  public delete(id:number):Observable<any>{
    return this.httClient.delete<any>(this.URL+`delete/${id}`);
  }
}
