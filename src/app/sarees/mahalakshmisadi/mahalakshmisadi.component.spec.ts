import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahalakshmisadiComponent } from './mahalakshmisadi.component';

describe('MahalakshmisadiComponent', () => {
  let component: MahalakshmisadiComponent;
  let fixture: ComponentFixture<MahalakshmisadiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MahalakshmisadiComponent]
    });
    fixture = TestBed.createComponent(MahalakshmisadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
