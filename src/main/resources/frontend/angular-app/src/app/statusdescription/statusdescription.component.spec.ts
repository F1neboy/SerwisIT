import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusdescriptionComponent } from './statusdescription.component';

describe('StatusdescriptionComponent', () => {
  let component: StatusdescriptionComponent;
  let fixture: ComponentFixture<StatusdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusdescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
