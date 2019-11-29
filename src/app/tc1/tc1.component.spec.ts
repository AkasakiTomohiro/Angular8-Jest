/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Tc1Component } from './tc1.component';
import { Ts1Service } from '../Service/ts1.service';
import { Ts2Service } from '../Service/ts2.service';

describe('Tc1Component', () => {
  let component: Tc1Component;
  let fixture: ComponentFixture<Tc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tc1Component],
      providers: [Ts1Service, Ts2Service]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
