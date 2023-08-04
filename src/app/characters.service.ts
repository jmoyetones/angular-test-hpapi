import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private url = 'https://hp-api.onrender.com/api/characters';
  private age = 0;
  constructor(private httpClient: HttpClient) {}

  getCharacters() {
    return this.httpClient.get(this.url);
  }

}
