import { Injectable } from '@angular/core';
import { createClient , Entry } from 'contentful';
import { from } from 'rxjs/internal/observable/from';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }
  private client = createClient({
    space:'d9z7k5qhzwyx',
    accessToken : 'dVxa01gjjO5VkXtt42jQ8uvriwgDb4x5ZFMY9gnYjgo'
  });
  getAllEntries(){
   const promise = this.client.getEntries()
    return from(promise);
    
  }
  getEntryById(id: string){
    const promise = this.client.getEntry(id);
     return from(promise);
     
   }

}
