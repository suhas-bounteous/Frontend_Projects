import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReceiverAComponent } from './receiver-a/receiver-a.component';
import { ReceiverBComponent } from './receiver-b/receiver-b.component';
import { SenderComponent } from './sender/sender.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceiverAComponent,
    ReceiverBComponent,
    SenderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
