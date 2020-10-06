import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Center } from '../center';
import { CenterService } from '../center.service';

@Component({
  selector: 'center-list',
  templateUrl: './center-list.component.html',
  styleUrls: ['./center-list.component.css']
})
export class CenterListComponent  {
  
  centers:Center[];

  constructor(private centerService:CenterService) {
   let observable:Observable<Center[]>=centerService.getAll();
   observable.subscribe(
     centerArg=>{this.centers=centerArg;}
   )
   }

   removeUser(centerid:number){
    let observable=this.centerService.removeCenter(centerid);
    observable.subscribe(
      res=>{
       this.removeLocalElement(centerid);
      },
      err=>{
        console.log("inside removeuser, err is "+err.message);
      }
      );
    }

   removeLocalElement(centerId: number): void {
    console.log("before center removed,length=" + this.centers.length);
    for (let i = 0; i < this.centers.length; i++) {
      let center = this.centers[i];
      if (center.centerId === centerId) {
        //index and number of elements to remove
        this.centers.splice(i, 1);
      }
    }

  }

}
