import { NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [NgTemplateOutlet, NgStyle],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  header = input.required<TemplateRef<any>>();
  headerData = input<any>();
  body = input.required<TemplateRef<any>>();
  bodyData = input<any>();
  width = input<string>('400px');
}
