import { TestBed } from '@angular/core/testing';

import { ZleceniaService } from './zlecenia.service';

describe('ZleceniaService', () => {
  let service: ZleceniaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZleceniaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
