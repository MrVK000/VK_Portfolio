import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { ToggleSwitch } from 'primeng/toggleswitch';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ToggleSwitch
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
