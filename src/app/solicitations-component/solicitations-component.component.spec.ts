import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationsComponentComponent } from './solicitations-component.component';

describe('SolicitationsComponentComponent', () => {
  let component: SolicitationsComponentComponent;
  let fixture: ComponentFixture<SolicitationsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitationsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
