import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemedicamentpageComponent } from './listemedicamentpage.component';

describe('ListemedicamentpageComponent', () => {
  let component: ListemedicamentpageComponent;
  let fixture: ComponentFixture<ListemedicamentpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListemedicamentpageComponent]
    });
    fixture = TestBed.createComponent(ListemedicamentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
