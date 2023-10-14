import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  private BASE_URL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }


  getCharacters() {
    return this.http.get(`${this.BASE_URL}/character`);
  }
}
