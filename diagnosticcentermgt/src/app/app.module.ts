import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCenterComponent } from './add-center/add-center.component';
import { CenterDetailsComponent } from './center-details/center-details.component';
import { CenterListComponent } from './center-list/center-list.component';
import { CenterService } from './center.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCenterComponent,
    CenterDetailsComponent,
    CenterListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
   
    
  ],
  providers: [CenterService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
