'use client';

import { useEffect, useState } from 'react';
import BarChartComponent from '@/components/Charts/BarChartComponent';
import LineChartComponent from '@/components/Charts/LineChartComponent';
import PieChartComponent from '@/components/Charts/PieChartComponent';
import FilterInput from '@/components/FilterInput';

export default function DashboardPage() {
  const [year, setYear] = useState<number>(2024);
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');
  const [threshold, setThreshold] = useState<number>(0);

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // 🔥 Fetch data dynamically from API
  async function fetchData(selectedYear: number) {
    try {
      setLoading(true);
      const response = await fetch(`/api/sales/${selectedYear}`);
      const json = await response.json();
      setData(json.data);
    } finally {
      setLoading(false);
    }
  }

  // Fetch on year change
  useEffect(() => {
    fetchData(year);
  }, [year]);

  const filtered = data.filter((item) => item.sales >= threshold);

  return (
    <div>
      {/* Filters */}
      <div className="flex items-center justify-between mb-6">
        
        {/* Year Dropdown */}
        <div className="flex items-center gap-3">
          <label className="font-medium">Year</label>
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="border rounded p-2"
          >
            <option value={2024}>2024</option>
            <option value={2023}>2023</option>
            <option value={2022}>2022</option>
          </select>
        </div>

        {/* Chart Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setChartType('bar')}
            className={`px-3 py-1 rounded ${
              chartType === 'bar' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Bar
          </button>

          <button
            onClick={() => setChartType('line')}
            className={`px-3 py-1 rounded ${
              chartType === 'line' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Line
          </button>

          <button
            onClick={() => setChartType('pie')}
            className={`px-3 py-1 rounded ${
              chartType === 'pie' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Pie
          </button>
        </div>
      </div>

      {/* Threshold Filter Input */}
      <FilterInput onFilter={(v) => setThreshold(v)} />

      {/* Loading Indicator */}
      {loading && <p className="mt-4 text-gray-600">Loading data...</p>}

      {/* Chart Section */}
      {!loading && (
        <div className="mt-6">
          {chartType === 'bar' && <BarChartComponent data={filtered} />}
          {chartType === 'line' && <LineChartComponent data={filtered} />}
          {chartType === 'pie' && <PieChartComponent data={filtered} />}
        </div>
      )}

      {/* Raw Data */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold">Raw data (after filter)</h3>
        <pre className="bg-white border rounded p-4 mt-2 overflow-auto max-h-48">
          {JSON.stringify(filtered, null, 2)}
        </pre>
      </div>
    </div>
  );
}
