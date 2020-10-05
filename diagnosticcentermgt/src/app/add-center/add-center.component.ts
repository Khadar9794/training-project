import { Component, OnInit } from '@angular/core';
import { Center } from '../center';
import { Observable } from 'rxjs';
import { CenterService } from '../center.service';

@Component({
  selector: 'add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.css']
})
export class AddCenterComponent {

  centerService:CenterService;

  constructor(centerService:CenterService){
    this.centerService=centerService;
  }
  center:Center;

  addCenter(form:any){
   let data=form.value;
   let name=data.centerName;
   this.center=new Center(-1,name);
   let observable:Observable<Center>=this.centerService.addCenter(this.center);
   observable.subscribe(
     centerArg=>{this.center=centerArg},
   );
  }

}