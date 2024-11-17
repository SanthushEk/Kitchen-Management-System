import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import { Line } from 'react-chartjs-2';  // Import Line chart from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Reporting() {
  const [reportName, setReportName] = useState('');  // State for the report name input
  const [reportValue, setReportValue] = useState('');  // State for the report value input
  const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March', 'April'],  // X-axis labels
    datasets: [
      {
        label: 'Sales Data',
        data: [65, 59, 80, 81],  // Y-axis data (example sales data)
        borderColor: 'rgba(75, 192, 192, 1)',  // Line color
        borderWidth: 1,
        fill: false,  // Disable fill under the line
      },
    ],
  });

  const navigate = useNavigate();  // Initialize navigate function

  // Chart options (you can customize this as needed)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Data Over Time',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Handle submit function
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from reloading

    // Add the new report data to the chart
    setChartData((prevData) => ({
      ...prevData,
      labels: [...prevData.labels, reportName],  // Add new label (report name)
      datasets: [
        {
          ...prevData.datasets[0],
          data: [...prevData.datasets[0].data, Number(reportValue)],  // Add new value
        },
      ],
    }));

    // Clear the inputs after submitting
    setReportName('');
    setReportValue('');
  };

  return (
    <div className="p-6 bg-blue-900 rounded-lg text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Reporting & Analytics</h2>
      <p className="text-center mb-4">Here, you will find detailed insights and reports for your system.</p>

      {/* Line chart */}
      <div className="mb-6">
        <Line data={chartData} options={options} />
      </div>

      {/* Input Fields with White Background and Black Text */}
      <div className="mb-6">
        <input
          value={reportName}
          onChange={(e) => setReportName(e.target.value)}
          className="p-2 mb-4 bg-white text-black rounded focus:outline-none w-full"
          placeholder="Enter Report Name"
        />
        <input
          value={reportValue}
          onChange={(e) => setReportValue(e.target.value)}
          className="p-2 mb-4 bg-white text-black rounded focus:outline-none w-full"
          placeholder="Enter Report Value"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 p-2 rounded hover:bg-blue-500 transition duration-200 mt-4"
        >
          Submit
        </button>
      </div>
      
    </div>
  );
}

export default Reporting;
