import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

//step-03
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
//step-06
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  declarations: [AppComponent, HelloComponent, MyCounterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
