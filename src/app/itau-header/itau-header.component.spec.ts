import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItauHeaderComponent } from './itau-header.component';

describe('ItauHeaderComponent', () => {
  let component: ItauHeaderComponent;
  let fixture: ComponentFixture<ItauHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItauHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItauHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
