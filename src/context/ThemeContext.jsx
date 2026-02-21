import { useEffect, useState } from 'react';
import { ThemeContext } from './themeContext';

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Always default to light mode, only use saved preference if available
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            // Validate saved theme to ensure it's a valid value
            if (savedTheme === 'dark' || savedTheme === 'light') {
                return savedTheme;
            }
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        console.log('Theme changed to:', theme);

        // Explicitly handle class toggling
        if (theme === 'dark') {
            root.classList.add('dark');
            root.style.colorScheme = 'dark';
        } else {
            root.classList.remove('dark');
            root.style.colorScheme = 'light';
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        console.log('Toggle theme clicked');
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
