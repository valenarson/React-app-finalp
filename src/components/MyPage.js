import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext';

export default function MyPage () {
    const { colorTheme, onChangeTheme } = useContext(ThemeContext);  
    return (
        <div style={{
                        backgroundColor:
                            colorTheme === 'dark' ? 'black' : 'white',
                        width: '100vw',
                        height: '100vh',
                        fontSize: 24,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: colorTheme === 'dark' ? 'white' : 'black',
                    }}>
                        <button
                        style={{ marginTop: 30 }}
                        onClick={onChangeTheme}
                        >
                        Change Dark Mode
                        </button>
                    </div>                    
      );
}