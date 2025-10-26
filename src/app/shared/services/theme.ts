import { computed, Injectable, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

export const THEME_MODE_KEY = 'themeMode';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  themeMode = signal<ThemeMode>(
    (localStorage.getItem(THEME_MODE_KEY) as ThemeMode | null) || 'light',
  );

  prevThemeStyle = signal<{ [x: string]: string }>(
    this.themeMode() === 'light' ? this.lightThemeStyle : this.darkThemeStyle,
  );

  themeStyles = computed<{ [x: string]: string }>(() => {
    const theme = this.themeMode();
    localStorage.setItem(THEME_MODE_KEY, theme);
    if (theme === 'light') {
      return this.lightThemeStyle;
    } else if (theme === 'dark') {
      return this.darkThemeStyle;
    } else {
      throw new Error(`Invalid theme. Must be either 'light' or 'dark'`);
    }
  });

  get lightThemeStyle() {
    const themeStyles = {
      'bg-main': '',
      'bg-secondary': '',
      'text-main': '',
      'text-secondary': '',
      'border-secondary': '',
    };

    themeStyles['bg-main'] = 'bg-neutral-50';
    themeStyles['bg-secondary'] = 'bg-sky-900';
    themeStyles['text-main'] = 'text-neutral-50';
    themeStyles['text-secondary'] = 'text-sky-900';
    themeStyles['border-secondary'] = 'border-sky-900';

    return themeStyles;
  }

  get darkThemeStyle() {
    const themeStyles = {
      'bg-main': '',
      'bg-secondary': '',
      'text-main': '',
      'text-secondary': '',
      'border-secondary': '',
    };

    themeStyles['bg-main'] = 'bg-neutral-700';
    themeStyles['bg-secondary'] = 'bg-neutral-900';
    themeStyles['text-main'] = 'text-neutral-50';
    themeStyles['text-secondary'] = 'text-neutral-50';
    themeStyles['border-secondary'] = 'border-neutral-900';

    return themeStyles;
  }
}
