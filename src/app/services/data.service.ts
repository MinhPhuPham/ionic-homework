import { Injectable } from '@angular/core';
import { sings } from '../../assets/data/data'
@Injectable({
  providedIn: 'root'
})
export class DataService {
listsings;
  constructor() { }

  ngOnInit() {
    this.listsings= sings.map((sings,i)=> sings);
  }
  getSongs(Id) {
 let find_id= this.listsings.find(id=>{
   return id.id===Id;
 })
 return Id;
  }
}
