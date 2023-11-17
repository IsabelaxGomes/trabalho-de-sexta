import { TestBed } from '@angular/core/testing';
import { DiretorsService } from './diretors.service';

describe('DiretorsService', () => {
  let service: DiretorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiretorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
