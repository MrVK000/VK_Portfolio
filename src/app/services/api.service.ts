import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contactDetails } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // baseUrl: string = "http://localhost:8000/customer-details/save";
  baseUrl: string = "https://vk-portfolio-backend.onrender.com/customer-details/save";

  constructor(private http: HttpClient) { }

  public sendContactDetails(payload: contactDetails): Observable<any> {
    return this.http.post(this.baseUrl, payload);
  }
}
