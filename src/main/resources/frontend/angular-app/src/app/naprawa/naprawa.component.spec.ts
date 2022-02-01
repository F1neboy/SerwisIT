import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaprawaComponent } from './naprawa.component';

describe('NaprawaComponent', () => {
  let component: NaprawaComponent;
  let fixture: ComponentFixture<NaprawaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaprawaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaprawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
