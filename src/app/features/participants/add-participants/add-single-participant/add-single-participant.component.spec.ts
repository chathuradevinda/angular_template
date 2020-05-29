import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSingleParticipantComponent } from './add-single-participant.component';

describe('AddSingleParticipantComponent', () => {
  let component: AddSingleParticipantComponent;
  let fixture: ComponentFixture<AddSingleParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSingleParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSingleParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
