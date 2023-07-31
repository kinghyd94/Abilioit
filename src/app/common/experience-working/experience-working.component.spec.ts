import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceWorkingComponent } from './experience-working.component';

describe('ExperienceWorkingComponent', () => {
  let component: ExperienceWorkingComponent;
  let fixture: ComponentFixture<ExperienceWorkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceWorkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
