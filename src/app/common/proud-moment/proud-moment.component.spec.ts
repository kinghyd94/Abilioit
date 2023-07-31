import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudMomentComponent } from './proud-moment.component';

describe('ProudMomentComponent', () => {
  let component: ProudMomentComponent;
  let fixture: ComponentFixture<ProudMomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProudMomentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProudMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
