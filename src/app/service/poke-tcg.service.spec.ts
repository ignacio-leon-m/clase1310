import { TestBed } from '@angular/core/testing';

import { PokeTcgService } from './poke-tcg.service';

describe('PokeTcgService', () => {
  let service: PokeTcgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeTcgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
