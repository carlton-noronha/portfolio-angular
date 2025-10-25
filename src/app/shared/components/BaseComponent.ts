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
}
