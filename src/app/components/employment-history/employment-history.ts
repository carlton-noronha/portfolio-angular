import { Component } from '@angular/core';
import { Card } from '../../shared/components/card/card';
import { exmploymentDataList } from '../../shared/constants';

@Component({
  selector: 'app-employment-history',
  imports: [Card],
  templateUrl: './employment-history.html',
  styleUrl: './employment-history.css',
})
export class EmploymentHistory {
  topClasses = ['top-[20%]', 'top-[40%]', 'top-[60%]'];
  employmentData = exmploymentDataList;
}
