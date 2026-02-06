import React from 'react';

const Reports: React.FC = () => {
  const reports = [
    { id: 1, title: 'Monthly Sales Report', date: '2024-02-01', type: 'Sales', status: 'Completed' },
    { id: 2, title: 'User Analytics Report', date: '2024-02-03', type: 'Analytics', status: 'Completed' },
    { id: 3, title: 'Performance Review', date: '2024-02-05', type: 'Performance', status: 'Pending' },
    { id: 4, title: 'Financial Summary', date: '2024-02-06', type: 'Finance', status: 'In Progress' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Reports</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Generate Report
          </button>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((report) => (
            <div key={report.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{report.title}</h3>
                  <p className="text-sm text-gray-500">{report.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  report.status === 'Completed' 
                    ? 'bg-green-100 text-green-700'
                    : report.status === 'Pending'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {report.status}
                </span>
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                  {report.type}
                </span>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
                  View
                </button>
                <button className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;