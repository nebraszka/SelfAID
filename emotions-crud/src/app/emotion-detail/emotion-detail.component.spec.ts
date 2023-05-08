import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionDetailComponent } from './emotion-detail.component';

describe('EmotionDetailComponent', () => {
  let component: EmotionDetailComponent;
  let fixture: ComponentFixture<EmotionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmotionDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmotionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
