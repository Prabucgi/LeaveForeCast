import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ViewLeaveComponent } from './view-leave/view-leave.component';
import { AdminLeaveComponent } from './admin-leave/admin-leave.component';




@NgModule({
  declarations: [
    AppComponent,
    ApplyLeaveComponent,
    ViewLeaveComponent,
    AdminLeaveComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
       RouterModule.forRoot([
           {
        path: 'apply',
        component: ApplyLeaveComponent
      },
      {
        path: 'view',
        component: ViewLeaveComponent
      },
      {
        path: 'admin',
        component: AdminLeaveComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
