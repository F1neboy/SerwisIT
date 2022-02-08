import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CennikComponent } from './cennik.component';

describe('CennikComponent', () => {
  let component: CennikComponent;
  let fixture: ComponentFixture<CennikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CennikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CennikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
