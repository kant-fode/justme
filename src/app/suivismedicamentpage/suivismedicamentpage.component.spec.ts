import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivismedicamentpageComponent } from './suivismedicamentpage.component';

describe('SuivismedicamentpageComponent', () => {
  let component: SuivismedicamentpageComponent;
  let fixture: ComponentFixture<SuivismedicamentpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuivismedicamentpageComponent]
    });
    fixture = TestBed.createComponent(SuivismedicamentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
