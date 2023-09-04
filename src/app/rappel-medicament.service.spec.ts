import { TestBed } from '@angular/core/testing';

import { RappelMedicamentService } from './rappel-medicament.service';

describe('RappelMedicamentService', () => {
  let service: RappelMedicamentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RappelMedicamentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
