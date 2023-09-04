import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderstatiqueComponent } from './headerstatique.component';

describe('HeaderstatiqueComponent', () => {
  let component: HeaderstatiqueComponent;
  let fixture: ComponentFixture<HeaderstatiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderstatiqueComponent]
    });
    fixture = TestBed.createComponent(HeaderstatiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
