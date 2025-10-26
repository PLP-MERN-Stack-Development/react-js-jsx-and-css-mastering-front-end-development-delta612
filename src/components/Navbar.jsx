import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold">PLP Task Manager</h1>
          <span className="text-sm text-gray-500 dark:text-gray-400">Week 3 Assignment</span>
        </div>

        <div className="flex items-center gap-3">
          <nav className="hidden sm:flex gap-3">
            <Link to="/" className="text-sm text-blue-600 dark:text-blue-400">Home</Link>
            <Link to="/posts" className="text-sm text-blue-600 dark:text-blue-400">Posts</Link>
          </nav>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
