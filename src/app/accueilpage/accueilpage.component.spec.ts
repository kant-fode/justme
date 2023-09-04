import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilpageComponent } from './accueilpage.component';

describe('AccueilpageComponent', () => {
  let component: AccueilpageComponent;
  let fixture: ComponentFixture<AccueilpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilpageComponent]
    });
    fixture = TestBed.createComponent(AccueilpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
