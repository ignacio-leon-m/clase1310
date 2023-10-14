import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeTcgService {

  constructor(private http: HttpClient) { }

  getCards() {
    const headers = new HttpHeaders().set('X-Api-Key', '82063263-aa73-4358-9a62-85f3299729f4');
    return this.http.get('https://api.pokemontcg.io/v2/cards', { headers });
  }

}
