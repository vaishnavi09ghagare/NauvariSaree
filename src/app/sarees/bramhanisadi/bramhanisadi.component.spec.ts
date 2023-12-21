import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BramhanisadiComponent } from './bramhanisadi.component';

describe('BramhanisadiComponent', () => {
  let component: BramhanisadiComponent;
  let fixture: ComponentFixture<BramhanisadiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BramhanisadiComponent]
    });
    fixture = TestBed.createComponent(BramhanisadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
