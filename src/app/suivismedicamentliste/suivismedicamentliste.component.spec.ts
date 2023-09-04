import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivismedicamentlisteComponent } from './suivismedicamentliste.component';

describe('SuivismedicamentlisteComponent', () => {
  let component: SuivismedicamentlisteComponent;
  let fixture: ComponentFixture<SuivismedicamentlisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuivismedicamentlisteComponent]
    });
    fixture = TestBed.createComponent(SuivismedicamentlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
