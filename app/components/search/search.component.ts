import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
})
export class SearchComponent  {
    header_title: string;

    constructor(){
      this.header_title = "Studio Ghibli Film Search"
    }

 }
