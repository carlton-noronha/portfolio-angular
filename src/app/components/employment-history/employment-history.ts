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
  topClasses = ['top-[200px]', 'top-[500px]', 'top-[800px]', 'top-[1300px]'];
  employmentData = exmploymentDataList;
}
