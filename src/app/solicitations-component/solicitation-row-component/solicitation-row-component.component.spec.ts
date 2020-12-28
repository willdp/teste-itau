import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationRowComponentComponent } from './solicitation-row-component.component';

describe('SolicitationRowComponentComponent', () => {
  let component: SolicitationRowComponentComponent;
  let fixture: ComponentFixture<SolicitationRowComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitationRowComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationRowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
