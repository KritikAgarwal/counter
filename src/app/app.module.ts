import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcounterComponent } from './addcounter/addcounter.component';
import { RemovecounterComponent } from './removecounter/removecounter.component';
import { ResetcounterComponent } from './resetcounter/resetcounter.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcounterComponent,
    RemovecounterComponent,
    ResetcounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
