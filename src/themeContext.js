import React from 'react';

export const ThemeContext = React.createContext({
    colorTheme: 'dark',
    onChangeTheme: () => { },
});