import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Center } from '../center';
import { CenterService } from '../center.service';

@Component({
  selector: 'center-details',
  templateUrl: './center-details.component.html',
  styleUrls: ['./center-details.component.css']
})
export class CenterDetailsComponent {

  constructor(private route:ActivatedRoute, private centerService:CenterService) {
    let observable=route.paramMap;
    observable.subscribe((params:ParamMap)=>{
      let idValue:string=params.get("id");
      let idNum:number=Number(idValue);
      this.findCenterById(idNum);
    })
   }

  center:Center;

  findCenterById(id:number){
    let observable:Observable<Center>=this.centerService.getCenter(id);
    observable.subscribe(
      centerArg=>{
        this.center=centerArg;
      }
    )
  
  }
   findCenter(form:any){
     let data=form.value;
    let id=data.centerId;
     this.findCenterById(id);
   }

}
