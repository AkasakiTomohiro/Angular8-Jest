/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Ts2Service } from './ts2.service';

describe('Service: Ts2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ts2Service]
    });
  });

  it('should ...', inject([Ts2Service], (service: Ts2Service) => {
    expect(service).toBeTruthy();
  }));
});
