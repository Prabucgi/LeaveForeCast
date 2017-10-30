import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'lv-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css'],

})
export class ApplyLeaveComponent implements OnInit {
  applyForm: FormGroup;
  projects: string[];
  membersMap = new Map<string, string[]>();
  members: string[];
  value: Date = new Date(1981, 3, 27);
  now: Date = new Date();
  min: Date = new Date(1900, 0, 1);
  dateClear = new Date(2015, 11, 1, 6);
  constructor(private fb: FormBuilder) {

  }
  createForm() {
    this.applyForm = this.fb.group({
      member: ['', Validators.required],
      project: ['', Validators.required],
      days: ['', Validators.required],
      rememberMeNextTime: false
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

  buildDay(): FormGroup {
    return this.fb.group({ day: '' });
  }
  onChanges(): void {
    this.applyForm.get("project").valueChanges.subscribe(val => {
      this.members = this.membersMap.get(val);
    })
  }
  save(): void {
    console.log("Saved");
    console.log(this.applyForm);
    alert("Saved");
  }
}
