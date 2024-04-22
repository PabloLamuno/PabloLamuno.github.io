import { TestBed } from '@angular/core/testing';

import { ApiComunicationService } from './api-comunication.service';

describe('ApiComunicationService', () => {
  let service: ApiComunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiComunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
