import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';


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
  isDatePicked = false;

  constructor(private fb: FormBuilder) {

  }
  createForm() {
    this.applyForm = this.fb.group({
      member: ['', Validators.required],
      project: ['', Validators.required],
      days: [[], Validators.required],
      rememberMeNextTime: false,
      selectedDate: null
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
    this.applyForm.get("selectedDate").valueChanges.subscribe(val => {
      this.isDatePicked = val != null && val != '';
    })
  }
  save(): void {
    console.log("Saved");
    console.log(this.applyForm);
    alert("Saved");
  }
  addDate(): void {
    var selectedDate = this.applyForm.get("selectedDate");
    var days = this.applyForm.get("days").value as FormArray;
    days.push(selectedDate.value);
    selectedDate.setValue('');
  }
  deleteDate(day: number): void {
    var days = this.applyForm.get("days").value as FormArray;
    alert(days[day]);
    days.removeAt(day);
  }
}
