import { Component } from '@angular/core';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent {
  selectedDate?: Date;
  selectedEmotion?: string;

  onDateSelect(date: Date) {
    this.selectedDate = date;
    console.log('Selected date: ', this.selectedDate);
  }

  selectEmotion(emotion: string) {
    this.selectedEmotion = emotion;
  }
}
