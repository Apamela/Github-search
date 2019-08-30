import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { DateCountPipe } from './date-count.pipe';
import { GithubComponent } from './github/github.component';
// import { GithubService } from './github-services/github.service',

@NgModule({
  declarations: [
    AppComponent,
    FormSearchComponent,
    DateCountPipe,
    GithubComponent,
    // GithubService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
