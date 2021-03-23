import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  baseUrl: string;
  constructor(

    private http: HttpClient
  ) { 
    this.baseUrl='https://rickandmortyapi.com/api';
  }

  getAll(pPage = 1): Promise <any> {
    return this.http.get<any>(`${this.baseUrl}/character?page=${pPage}`).toPromise();
  }
}
