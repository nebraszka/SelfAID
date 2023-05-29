import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Entry } from '../entry';
import { IndexedDBService } from '../indexed-db.service';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent {
  journalForm: FormGroup;

  constructor(private indexedDBService: IndexedDBService) { 
    this.journalForm = new FormGroup({
      'date': new FormControl(null),
      'title': new FormControl(null),
      'emotion': new FormControl(null),
      'questionAnswer': new FormControl(null)//,
      // 'multipleChoiceAnswer': new FormControl([])
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
      questionAnswer: this.journalForm.value.questionAnswer//,
      //multipleChoiceAnswer: this.journalForm.value.multipleChoice
    };

    this.indexedDBService.addEntry(newEntry).then(() => {
      // Reset the form or navigate to other component
      this.journalForm.reset();
    }, error => {
      console.log(error);
    });

    // let newEntry: Entry = this.journalForm.value;

    // this.indexedDBService.addEntry(newEntry).then(() => {
    //   // Reset the form or navigate to other component
    //   this.journalForm.reset();
    // }, error => {
    //   console.log(error);
    // });
  }

}
