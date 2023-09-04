import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappelmedicamentlisteComponent } from './rappelmedicamentliste.component';

describe('RappelmedicamentlisteComponent', () => {
  let component: RappelmedicamentlisteComponent;
  let fixture: ComponentFixture<RappelmedicamentlisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RappelmedicamentlisteComponent]
    });
    fixture = TestBed.createComponent(RappelmedicamentlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
