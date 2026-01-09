import React, { useEffect, useState } from 'react'
import assets from "../assets/assets"

const ThemeToggleBtn = ({ theme, setTheme }) => {

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem("theme", theme);
    }, [theme]);


    return (
        <div>
            <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-1.5 border border-gray rounded-full mt-1"
            >
                {theme === 'dark' ? (
                    <img src={assets.sun_icon} alt="Light Mode" className="w-5 h-5" />
                ) : (
                    <img src={assets.moon_icon} alt="Dark Mode" className="w-5 h-5" />
                )}
            </button>

        </div>
    )
}

export default ThemeToggleBtn