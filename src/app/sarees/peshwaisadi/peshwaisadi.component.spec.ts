import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeshwaisadiComponent } from './peshwaisadi.component';

describe('PeshwaisadiComponent', () => {
  let component: PeshwaisadiComponent;
  let fixture: ComponentFixture<PeshwaisadiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeshwaisadiComponent]
    });
    fixture = TestBed.createComponent(PeshwaisadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
