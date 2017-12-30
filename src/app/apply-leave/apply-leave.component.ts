import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormArray, AbstractControl } from '@angular/forms';


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
  atleastOneDayAdded = false;
  leavesSaved = false;
  constructor(private fb: FormBuilder) {

  }
  createForm() {
    this.applyForm = this.fb.group({
      member: ['', Validators.required],
      project: ['', Validators.required],
      days: [new Array<string>()],
      rememberMeNextTime: false,
      selectedDate: null
    });
  }
  validateDays(control: AbstractControl) {

    var days = control.value as Array<string>;
    alert(days.length);
    if (days.length == 0) {
      return { notValid: false };
    }
    return null;


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
    this.applyForm.controls.project.valueChanges.subscribe(val => {
      this.members = this.membersMap.get(val);
    })
    this.applyForm.controls.selectedDate.valueChanges.subscribe(val => {
      this.isDatePicked = val != null && val != '';
    })
  }
  save(): void {
    console.log("Saved");
    console.log(this.applyForm);
    this.leavesSaved = true;
    this.applyForm.reset();
    this.applyForm.controls.days.setValue(new Array<string>());
    this.atleastOneDayAdded = false;
  }
  addDate(): void {
    var selectedDate = this.applyForm.get("selectedDate");
    var days = this.applyForm.controls.days.value as Array<string>;
    if (this.dayAlreadyAdded(days, selectedDate.value)) return;

    days.push(selectedDate.value);
    selectedDate.setValue('');
    this.atleastOneDayAdded = days.length > 0;
  }
  deleteDate(day: string): void {
    var days = this.applyForm.get("days").value as Array<string>;
    var index = days.indexOf(day);
    days.splice(index, 1);
    this.atleastOneDayAdded = days.length > 0;
  }
  applyLeaveAgain(): void {
    this.leavesSaved = false;
  }
  clearAllSelectedDays(): void {
    this.applyForm.controls.days.setValue(new Array<string>());
    this.atleastOneDayAdded = false;
  }
  dayAlreadyAdded(days: Array<string>, day: string): boolean {
    var index = days.indexOf(day);
    return (index !== -1);
  }
}
