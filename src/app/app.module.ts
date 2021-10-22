import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { GithubComponent } from './github/github.component';
import { HttpClientModule } from '@angular/common/http';
import { GitUserComponent } from './git-user/git-user.component';

@NgModule({
  declarations: [
    AppComponent,
    GitUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
