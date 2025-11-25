'use client'


import React from 'react'
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts'


const COLORS = ['#4f46e5', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']


export default function PieChartComponent({ data }: { data: any[] }) {
// Pie chart expects value + name pairs; keep month/name
return (
<div className="bg-white border rounded p-4">
<h4 className="mb-2 font-medium">Pie Chart</h4>
<ResponsiveContainer width="100%" height={320}>
<PieChart>
<Pie data={data} dataKey="sales" nameKey="month" outerRadius={110} label />
<Tooltip />
</PieChart>
</ResponsiveContainer>
</div>
)
}