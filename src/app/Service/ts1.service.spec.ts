/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Ts1Service } from './ts1.service';
import { Ts2Service } from './ts2.service';

describe('Service: Ts1', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ts1Service, Ts2Service]
    });
  });

  it('should ...', inject([Ts1Service], (service: Ts1Service) => {
    expect(service).toBeTruthy();
  }));
});
