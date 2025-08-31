import { AfterViewInit, Component, ElementRef, OnDestroy, viewChild } from '@angular/core';
import { take, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit, OnDestroy {
  isCancelled = false;
  designationsEl = viewChild.required<ElementRef<HTMLParagraphElement>>('designations');
  designations = ['Consultant @ Deloitte USI', 'Ex-LTIMindtree'];

  ngAfterViewInit(): void {
    this.typeDesignation(this.designationsEl().nativeElement, this.designations);
  }

  typeDesignation<T extends HTMLElement>(
    node: T,
    designations: string[],
    opts: { typingSpeed: number; deleteSpeed: number; delayBetweenTexts: number } = {
      typingSpeed: 100,
      deleteSpeed: 50,
      delayBetweenTexts: 1000,
    },
  ) {
    if (designations.length === 0) {
      throw new Error('Paramter designations should have a minimum length of one.');
    }

    const _typeDesignation = (
      _currentDesignationIdx: number = 0,
      _charIdx: number = 0,
      _isDeleting: boolean = false,
    ) => {
      if (this.isCancelled) {
        return;
      }

      if (_isDeleting) {
        --_charIdx;
        const text = designations[_currentDesignationIdx].substring(0, _charIdx);
        node.innerText = text;
        if (_charIdx === 0) {
          _currentDesignationIdx = (_currentDesignationIdx + 1) % designations.length;
          timer(opts.typingSpeed)
            .pipe(take(1))
            .subscribe({
              next: () => _typeDesignation(_currentDesignationIdx, _charIdx, false),
            });
        } else {
          timer(opts.deleteSpeed)
            .pipe(take(1))
            .subscribe({
              next: () => _typeDesignation(_currentDesignationIdx, _charIdx, true),
            });
        }
      } else {
        ++_charIdx;
        const currentDesignation = designations[_currentDesignationIdx];
        const text = currentDesignation.substring(0, _charIdx);
        node.innerText = text;
        if (_charIdx === currentDesignation.length) {
          timer(opts.delayBetweenTexts)
            .pipe(take(1))
            .subscribe({
              next: () => _typeDesignation(_currentDesignationIdx, _charIdx, true),
            });
        } else {
          timer(opts.typingSpeed)
            .pipe(take(1))
            .subscribe({
              next: () => _typeDesignation(_currentDesignationIdx, _charIdx, false),
            });
        }
      }
    };

    _typeDesignation();
  }

  ngOnDestroy(): void {
    this.isCancelled = true;
  }
}
