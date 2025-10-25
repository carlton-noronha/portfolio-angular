import { computed, Injectable, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  themeMode = signal<ThemeMode>('light');
  themeStyles = computed<{ [x: string]: string }>(() => {
    const themeStyles = {
      'bg-main': '',
      'bg-blue': '',
      'text-main': '',
      'text-blue': '',
    };

    const theme = this.themeMode();
    if (theme === 'light') {
      themeStyles['bg-main'] = 'bg-neutral-50';
      themeStyles['bg-blue'] = 'bg-sky-900';
      themeStyles['text-main'] = 'text-neutral-50';
      themeStyles['text-blue'] = 'text-sky-900';
    } else if (theme === 'dark') {
    } else {
      throw new Error(`Invalid theme. Must be either 'light' or 'dark'`);
    }

    return themeStyles;
  });
}
