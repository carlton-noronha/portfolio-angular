import { NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, input, TemplateRef } from '@angular/core';
import { Theme } from '../../services/theme';
import { BaseComponent } from '../BaseComponent';

@Component({
  selector: 'app-card',
  imports: [NgTemplateOutlet, NgStyle],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card extends BaseComponent {
  header = input.required<TemplateRef<any>>();
  headerData = input<any>();
  body = input.required<TemplateRef<any>>();
  bodyData = input<any>();
  width = input<string>('400px');

  constructor(
    private readonly elRef: ElementRef<HTMLElement>,
    private readonly themeService: Theme,
  ) {
    super(themeService);
  }

  getElRef(): HTMLElement {
    return this.elRef.nativeElement;
  }
}
