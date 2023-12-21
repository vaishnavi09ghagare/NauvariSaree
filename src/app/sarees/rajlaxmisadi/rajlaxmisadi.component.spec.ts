import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajlaxmisadiComponent } from './rajlaxmisadi.component';

describe('RajlaxmisadiComponent', () => {
  let component: RajlaxmisadiComponent;
  let fixture: ComponentFixture<RajlaxmisadiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RajlaxmisadiComponent]
    });
    fixture = TestBed.createComponent(RajlaxmisadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
