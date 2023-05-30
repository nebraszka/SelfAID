import { Component, QueryList, ViewChildren, ElementRef } from '@angular/core';

import { FormGroup, FormControl, FormArray, AbstractControl } from '@angular/forms';;

import { Entry } from '../entry';
import { IndexedDBService } from '../indexed-db.service';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent {
  journalForm: FormGroup;

  @ViewChildren('checkboxes') checkboxes!: QueryList<ElementRef>;

  constructor(private indexedDBService: IndexedDBService) { 
    this.journalForm = new FormGroup({
      'date': new FormControl(null),
      'title': new FormControl(null),
      'emotion': new FormControl(null),
      'questionAnswer': new FormControl(null),
      'multipleChoiceAnswer': new FormArray([])
    });
  }

  onDateSelect(date: Date) {
    this.journalForm.patchValue({date: date});
  }

  onSelectEmotion(emotion: string) {
    this.journalForm.patchValue({emotion: emotion});
  }

  submit() {
    let newEntry: Entry = {
      date: this.journalForm.value.date,
      title: this.journalForm.value.title,
      emotion: this.journalForm.value.emotion,
      questionAnswer: this.journalForm.value.questionAnswer,
      multipleChoiceAnswer: this.journalForm.value.multipleChoiceAnswer
    };

    this.indexedDBService.addEntry(newEntry).then(() => {
      // Reset
      this.journalForm.reset();
    }, error => {
      console.log(error);
    });

    (this.journalForm.get('multipleChoiceAnswer') as FormArray).clear();
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });

    // let newEntry: Entry = this.journalForm.value;

    // this.indexedDBService.addEntry(newEntry).then(() => {
    //   // Reset the form or navigate to other component
    //   this.journalForm.reset();
    // }, error => {
    //   console.log(error);
    // });
  }

  onCheckChange(event: Event) {
    const multipleChoiceAnswer: FormArray = this.journalForm.get('multipleChoiceAnswer') as FormArray;
    const target = event.target as HTMLInputElement;
  
    if (target.checked) {
      multipleChoiceAnswer.push(new FormControl(target.value));
    } else {
      let i: number = 0;
      multipleChoiceAnswer.controls.forEach((item: AbstractControl) => {
        const control = item as FormControl;
        if (control.value === target.value) {
          multipleChoiceAnswer.removeAt(i);
          return;
        }
        i++;
      });      
    }
  }

}
