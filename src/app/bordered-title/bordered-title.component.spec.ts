import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderedTitleComponent } from './bordered-title.component';

describe('BorderedTitleComponent', () => {
  let component: BorderedTitleComponent;
  let fixture: ComponentFixture<BorderedTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderedTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderedTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
