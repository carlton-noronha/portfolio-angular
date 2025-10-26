import { AfterViewInit, Component, OnDestroy, viewChildren } from '@angular/core';
import { Card } from '../../shared/components/card/card';
import { exmploymentDataList } from '../../shared/constants';
import { NgClass } from '@angular/common';
import { Theme } from '../../shared/services/theme';
import { BaseComponent } from '../../shared/components/BaseComponent';

@Component({
  selector: 'app-experience',
  imports: [Card, NgClass],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience extends BaseComponent implements AfterViewInit, OnDestroy {
  topClasses = ['top-[200px]', 'top-[350px]', 'top-[1025px]', 'top-[1475px]'];
  employmentData = exmploymentDataList;
  braches = viewChildren<Card>('card');
  observer?: IntersectionObserver;

  constructor(private readonly themeService: Theme) {
    super(themeService);
  }

  ngAfterViewInit(): void {
    this.observer = this.createIntersectionObserver();
    this.braches().forEach((branch) => {
      this.observer!.observe(branch.getElRef());
    });
  }

  createIntersectionObserver() {
    return new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
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

  getVerticalBarStyles(first: boolean) {
    return {
      [this.themeStyles['bg-secondary']]: first,
      [`${this.themeStyles['border-secondary']} border-1`]: !first,
    };
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
