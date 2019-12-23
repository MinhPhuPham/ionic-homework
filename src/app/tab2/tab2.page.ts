import { Component } from '@angular/core';
import { sings } from '../../assets/data/data'
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
title="Singer list"
  listsings;
  sings: any;
  constructor() {}
  ngOnInit(){
    this.listsings= sings.map((sings,i)=> sings);
    this.sings=this.listsings; 
  }

}
