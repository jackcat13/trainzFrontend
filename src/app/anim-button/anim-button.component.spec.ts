import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimButtonComponent } from './anim-button.component';

describe('AnimButtonComponent', () => {
  let component: AnimButtonComponent;
  let fixture: ComponentFixture<AnimButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
