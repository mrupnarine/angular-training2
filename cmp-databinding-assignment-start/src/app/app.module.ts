import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GamecontrolComponent } from './gamecontrol/gamecontrol.component';
import { OddcontrolComponent } from './oddcontrol/oddcontrol.component';
import { EvencontrolComponent } from './evencontrol/evencontrol.component';

@NgModule({
  declarations: [
    AppComponent,
    GamecontrolComponent,
    OddcontrolComponent,
    EvencontrolComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
