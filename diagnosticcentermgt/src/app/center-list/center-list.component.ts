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
   let observable:Observable<Center[]>=centerService.removeCenter(centerId);
   observable.subscribe(
     centerArg=>{this.centers=centerArg;}
   )
   }

}
