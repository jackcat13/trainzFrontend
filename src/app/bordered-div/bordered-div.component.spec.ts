import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderedDivComponent } from './bordered-div.component';

describe('BorderedDivComponent', () => {
  let component: BorderedDivComponent;
  let fixture: ComponentFixture<BorderedDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderedDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderedDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
