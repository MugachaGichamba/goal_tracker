import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalFormclearComponent } from './goal-formclear.component';

describe('GoalFormclearComponent', () => {
  let component: GoalFormclearComponent;
  let fixture: ComponentFixture<GoalFormclearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalFormclearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalFormclearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
