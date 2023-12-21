import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SareeshomeComponent } from './sareeshome.component';

describe('SareeshomeComponent', () => {
  let component: SareeshomeComponent;
  let fixture: ComponentFixture<SareeshomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SareeshomeComponent]
    });
    fixture = TestBed.createComponent(SareeshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
