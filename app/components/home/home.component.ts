import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
})
export class HomeComponent  {
    header_title: string;

    constructor(){
      this.header_title = "Studio Ghibli Film Search"
    }

 }
