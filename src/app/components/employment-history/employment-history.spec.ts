import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentHistory } from './employment-history';

describe('EmploymentHistory', () => {
  let component: EmploymentHistory;
  let fixture: ComponentFixture<EmploymentHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploymentHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploymentHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
