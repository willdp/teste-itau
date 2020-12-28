import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFieldComponentComponent } from './add-field-component.component';

describe('AddFieldComponentComponent', () => {
  let component: AddFieldComponentComponent;
  let fixture: ComponentFixture<AddFieldComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFieldComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFieldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
