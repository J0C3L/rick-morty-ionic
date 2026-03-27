import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RickMortyService {
  private url = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get<any>(this.url);
  }
}