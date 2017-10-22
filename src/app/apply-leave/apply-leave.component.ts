import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lv-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  applyForm: FormGroup;
  projects: string[];
  membersMap = new Map<string, string[]>();
  members: string[];
  constructor(private fb: FormBuilder) {

  }
  createForm() {
    this.applyForm = this.fb.group({
      member: ['', Validators.required],
      project: ['', Validators.required],
      dayOn: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.membersMap.set("Heroma", ["Prabu", "Ganesh"]);
    this.membersMap.set("TWIN", ["Balaji", "Suresh"]);
    this.membersMap.set("Palasso", ["Arvind", "Sneka"]);
    this.projects = Array.from(this.membersMap.keys());
    this.createForm();
    this.onChanges();

  }
  onChanges(): void {
    this.applyForm.get("project").valueChanges.subscribe(val => {
      this.members = this.membersMap.get(val);
    })
  }
  Save():void{
    console.log("Saved");
    console.log(this.applyForm);
  }
}
