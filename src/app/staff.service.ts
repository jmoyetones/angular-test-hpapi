import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private url = 'https://hp-api.onrender.com/api/characters/staff';
  private age = 0;
  constructor(private httpClient: HttpClient) {}

  getStaff() {
    return this.httpClient.get(this.url);
  }

}
