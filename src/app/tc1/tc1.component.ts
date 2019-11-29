import { Component, OnInit } from '@angular/core';
import { Ts1Service } from '../Service/ts1.service';
import { Ts2Service } from '../Service/ts2.service';

@Component({
  selector: 'app-tc1',
  templateUrl: './tc1.component.html',
  styleUrls: ['./tc1.component.css']
})
export class Tc1Component implements OnInit {

  constructor(private ts1: Ts1Service, private ts2: Ts2Service) { }

  ngOnInit() {
  }

}
