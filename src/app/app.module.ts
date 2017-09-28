import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { Adal4Service, Adal4HTTPService } from 'adal-angular4';   
import { Http } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Adal4Service,                                                       // <-- ADD
    {                                                                   // <-- ADD
      provide: Adal4HTTPService,                                        // <-- ADD
      useFactory: Adal4HTTPService.factory,                             // <-- ADD
      deps: [Http, Adal4Service]                                        // <-- ADD
    }       
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
