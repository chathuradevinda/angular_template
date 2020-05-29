import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMultipleParticipantsComponent } from './add-multiple-participants.component';

describe('AddMultipleParticipantsComponent', () => {
  let component: AddMultipleParticipantsComponent;
  let fixture: ComponentFixture<AddMultipleParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMultipleParticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMultipleParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
