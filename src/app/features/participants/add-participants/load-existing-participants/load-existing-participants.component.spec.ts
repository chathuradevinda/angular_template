import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadExistingParticipantsComponent } from './load-existing-participants.component';

describe('LoadExistingParticipantsComponent', () => {
  let component: LoadExistingParticipantsComponent;
  let fixture: ComponentFixture<LoadExistingParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadExistingParticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadExistingParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
