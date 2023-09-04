import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappelmedicamentpageComponent } from './rappelmedicamentpage.component';

describe('RappelmedicamentpageComponent', () => {
  let component: RappelmedicamentpageComponent;
  let fixture: ComponentFixture<RappelmedicamentpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RappelmedicamentpageComponent]
    });
    fixture = TestBed.createComponent(RappelmedicamentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
