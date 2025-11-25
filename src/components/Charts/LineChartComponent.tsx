'use client'


import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'


export default function LineChartComponent({ data }: { data: any[] }) {
return (
<div className="bg-white border rounded p-4">
<h4 className="mb-2 font-medium">Line Chart</h4>
<ResponsiveContainer width="100%" height={320}>
<LineChart data={data}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="month" />
<YAxis />
<Tooltip />
<Line type="monotone" dataKey="sales" strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>
)
}