import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { LoaderComponent } from './components/loader/loader.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DialogModule } from 'primeng/dialog';
import { SpeedDialModule } from 'primeng/speeddial';
import { ButtonModule } from 'primeng/button';
import { ScrollTopModule } from 'primeng/scrolltop';
import { RippleModule } from 'primeng/ripple';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

// import { ToggleSwitch } from 'primeng/toggleswitch';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    DialogModule,
    SpeedDialModule,
    ButtonModule,
    ScrollTopModule,
    // ToggleSwitch



    ProgressSpinnerModule,
    RippleModule,
  ],

  providers: [MessageService, provideAnimations()],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
