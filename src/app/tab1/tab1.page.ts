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
  sings;
  sorted_name: { key: string; sings_detail: any; }[];
  constructor() { }
  isShow = false;
 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  ngOnInit() {
  this.listsings= sings.map((sings,i)=> sings);
  this.sings=this.listsings; 
  
  this.sorted_name= this.Group_sorted.filter(item=>{
    return item.sings_detail;
  })
 }


  sorted = sings.sort((a, b) => a.Name > b.Name ? 1 : -1);
  grouped = this.sorted.reduce((groups, sing_detail) => {
  const letter = sing_detail.Name.charAt(0);

  groups[letter] = groups[letter] || [];
  groups[letter].push(sing_detail);

  return groups;
}, {});

Group_sorted = Object.keys(this.grouped).map(key => ({key, sings_detail: this.grouped[key]}));



}
