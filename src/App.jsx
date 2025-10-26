import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import ApiList from './components/ApiList';
import { ThemeProvider } from './context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import Card from './components/Card';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
        <Navbar />

        <main className="flex-1 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 w-full">
          <Routes>
            <Route
              path="/"
              element={
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <Card>
                      <TaskManager />
                    </Card>
                  </div>

                  <aside>
                    <ApiList />
                  </aside>
                </div>
              }
            />

            <Route
              path="/posts"
              element={<div className="grid grid-cols-1 lg:grid-cols-3 gap-6"><div className="lg:col-span-3"><ApiList /></div></div>}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;