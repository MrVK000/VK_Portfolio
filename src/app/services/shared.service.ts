import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { }
}
