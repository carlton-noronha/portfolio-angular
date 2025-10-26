import { Theme, ThemeMode } from '../services/theme';

export class BaseComponent {
  constructor(private readonly theme: Theme) {}

  get themeStyles() {
    return this.theme.themeStyles();
  }

  get themeMode() {
    return this.theme.themeMode();
  }

  set themeMode(themeMode: ThemeMode) {
    this.theme.themeMode.set(themeMode);
  }

  set prevThemeStyles(prevThemeStyles: { [x: string]: string }) {
    this.theme.prevThemeStyle.set(prevThemeStyles);
  }

  get prevThemeStyles(): { [x: string]: string } {
    return this.theme.prevThemeStyle();
  }
}
