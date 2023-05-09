import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionJournalStartComponent } from './emotion-journal-start.component';

describe('EmotionJournalStartComponent', () => {
  let component: EmotionJournalStartComponent;
  let fixture: ComponentFixture<EmotionJournalStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmotionJournalStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmotionJournalStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
