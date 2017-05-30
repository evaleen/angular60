import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent }  from '../app/app.component';
import { UserComponent }  from '../components/user/user.component';
import { AboutComponent }  from '../components/about/about.component';
import { SearchComponent } from '../components/search/search.component';
import { HomeComponent } from '../components/home/home.component';
import {routing} from '../routing/app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, HomeComponent, UserComponent, AboutComponent, SearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
