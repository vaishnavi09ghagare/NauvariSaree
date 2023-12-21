import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahimastanisadiComponent } from './shahimastanisadi.component';

describe('ShahimastanisadiComponent', () => {
  let component: ShahimastanisadiComponent;
  let fixture: ComponentFixture<ShahimastanisadiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShahimastanisadiComponent]
    });
    fixture = TestBed.createComponent(ShahimastanisadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
