import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Home</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Getting Started
          </h2>
          <p className="text-gray-600 mb-6">
            This is a basic home component built with React, TypeScript, and Tailwind CSS.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Feature 1</h3>
              <p className="text-blue-700">Description of your first feature</p>
            </div>
            
            <div className="p-6 bg-indigo-50 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">Feature 2</h3>
              <p className="text-indigo-700">Description of your second feature</p>
            </div>
            
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Feature 3</h3>
              <p className="text-purple-700">Description of your third feature</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;