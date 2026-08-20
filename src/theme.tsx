import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'lj-portfolio-theme';

/** The site was built dark; light is the inverted counterpart. */
const DEFAULT_THEME: Theme = 'dark';

function readStored(): Theme {
  if (typeof localStorage === 'undefined') return DEFAULT_THEME;
  return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : DEFAULT_THEME;
}

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: DEFAULT_THEME,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(readStored);

  useEffect(() => {
    // Dark is the stylesheet's baseline, so only light needs an attribute.
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private browsing can refuse writes; the choice just won't outlive the tab.
    }
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
