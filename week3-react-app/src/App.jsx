import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import TaskManager from './components/TaskManager';
import ApiData from './components/ApiData';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Define routes for pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* TaskManager and API Data routes */}
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/api-data" element={<ApiData />} />
        </Routes>

        {/* Counter Section */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 mt-8">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg mb-4">
              Use the buttons below to increase or decrease the counter.
            </p>
            <div className="flex items-center gap-4 my-4">
              <button
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition-colors"
                onClick={() => setCount((count) => count - 1)}
              >
                -
              </button>
              <span className="text-xl font-bold">{count}</span>
              <button
                className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors"
                onClick={() => setCount((count) => count + 1)}
              >
                +
              </button>
            </div>
            <button
              className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              onClick={() => alert('How Are You?')}
            >
              Click Me
            </button>
          </div>
        </div>

        {/* TaskManager Component */}
        <TaskManager />

        {/* API Data Display */}
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
          <ApiData />
        </div>
      </Layout>
    </Router>
  );
}

export default App;

