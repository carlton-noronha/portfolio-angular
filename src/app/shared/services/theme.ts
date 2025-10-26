import { computed, Injectable, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  themeMode = signal<ThemeMode>('light');

  themeStyles = computed<{ [x: string]: string }>(() => {
    const theme = this.themeMode();
    if (theme === 'light') {
      return this.lightThemeStyle;
    } else if (theme === 'dark') {
      return this.darkThemeStyle;
    } else {
      throw new Error(`Invalid theme. Must be either 'light' or 'dark'`);
    }
  });

  prevThemeStyle = signal<{ [x: string]: string }>(
    this.themeMode() === 'light' ? this.lightThemeStyle : this.darkThemeStyle,
  );

  get lightThemeStyle() {
    const themeStyles = {
      'bg-main': '',
      'bg-secondary': '',
      'text-main': '',
      'text-secondary': '',
    };

    themeStyles['bg-main'] = 'bg-neutral-50';
    themeStyles['bg-secondary'] = 'bg-sky-900';
    themeStyles['text-main'] = 'text-neutral-50';
    themeStyles['text-secondary'] = 'text-sky-900';

    return themeStyles;
  }

  get darkThemeStyle() {
    const themeStyles = {
      'bg-main': '',
      'bg-secondary': '',
      'text-main': '',
      'text-secondary': '',
    };

    themeStyles['bg-main'] = 'bg-gray-500';
    themeStyles['bg-secondary'] = 'bg-gray-900';
    themeStyles['text-main'] = 'text-neutral-50';
    themeStyles['text-secondary'] = 'text-sky-900';

    return themeStyles;
  }
}
