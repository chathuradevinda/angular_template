import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingAddComponent } from './existing-add.component';

describe('ExistingAddComponent', () => {
  let component: ExistingAddComponent;
  let fixture: ComponentFixture<ExistingAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
