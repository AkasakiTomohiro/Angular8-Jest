import { Injectable } from '@angular/core';
import { Ts2Service } from './ts2.service';

@Injectable({
  providedIn: 'root'
})
export class Ts1Service {

  constructor(private ts2: Ts2Service) { }

}
