import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSearchComponent } from './form-search/form-search.component';


@NgModule({
  declarations: [
    AppComponent,
    FormSearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
