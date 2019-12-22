import { Component } from '@angular/core';
import { sings } from '../../assets/data/data'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = 'Music'
  listsings;
  sings
  constructor() { }
  ngOnInit() {
  this.listsings= sings.map((sings,i)=> sings);
  this.sings=this.listsings; 
  // this.sings.sort(function(a,b){
  //   var lccomp = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  //   return lccomp ? lccomp : a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
  // });
 }
//  SortSong(sings){
//    const sortedSong =this.sings.sort((a,b)=>{
//     var lccomp = a.Name.toLowerCase().localeCompare(b.Name.toLowerCase());
//     return 
//    })
//  }
 
}
