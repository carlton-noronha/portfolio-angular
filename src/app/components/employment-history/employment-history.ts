import {
  AfterViewInit,
  Component,
  OnDestroy,
  viewChildren,
} from '@angular/core';
import { Card } from '../../shared/components/card/card';
import { exmploymentDataList } from '../../shared/constants';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-employment-history',
  imports: [Card, NgClass],
  templateUrl: './employment-history.html',
  styleUrl: './employment-history.css',
})
export class EmploymentHistory implements AfterViewInit, OnDestroy {
  topClasses = ['top-[200px]', 'top-[350px]', 'top-[1025px]', 'top-[1475px]'];
  employmentData = exmploymentDataList;
  braches = viewChildren<Card>('card');
  observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = this.createIntersectionObserver();
    this.braches().forEach((branch) => {
      this.observer!.observe(branch.getElRef());
    });
  }

  createIntersectionObserver() {
    return new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.parentElement!.classList.add('opacity-100');
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      },
    );
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
