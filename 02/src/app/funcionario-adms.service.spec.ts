import { TestBed } from '@angular/core/testing';

import { FuncionarioADMsService } from './funcionario-adms.service';

describe('FuncionarioADMsService', () => {
  let service: FuncionarioADMsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionarioADMsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
