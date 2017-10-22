import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lv-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
 applyForm:FormGroup;
 projects:string[];
  constructor(private fb: FormBuilder) {
    this.createForm();
    this.projects = ["Heroma","TWIN","Palasso"];
   }
  createForm() {
    this.applyForm = this.fb.group({
      name: ['', Validators.required ],
      project: ['',Validators.required],
      dayOn:['',Validators.required]
    });
  }
  ngOnInit() {
  }

}
