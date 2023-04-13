import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkranstartowyComponent } from './ekranstartowy.component';

describe('EkranstartowyComponent', () => {
  let component: EkranstartowyComponent;
  let fixture: ComponentFixture<EkranstartowyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkranstartowyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EkranstartowyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
