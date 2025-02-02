import { SharedService } from './services/shared.service';
import {  Component,  OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  subs!: Subscription;

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.subs = this.sharedService.isLoading.subscribe((loadingValue: boolean) => {
      setTimeout(() => {
        this.isLoading = loadingValue;
      }, 0);
    })
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}


