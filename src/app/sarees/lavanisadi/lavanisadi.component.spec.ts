import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavanisadiComponent } from './lavanisadi.component';

describe('LavanisadiComponent', () => {
  let component: LavanisadiComponent;
  let fixture: ComponentFixture<LavanisadiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LavanisadiComponent]
    });
    fixture = TestBed.createComponent(LavanisadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
