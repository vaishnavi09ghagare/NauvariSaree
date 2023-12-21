import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastanisadiComponent } from './mastanisadi.component';

describe('MastanisadiComponent', () => {
  let component: MastanisadiComponent;
  let fixture: ComponentFixture<MastanisadiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MastanisadiComponent]
    });
    fixture = TestBed.createComponent(MastanisadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
