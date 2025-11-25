'use client'


import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'


export default function BarChartComponent({ data }: { data: any[] }) {
return (
<div className="bg-white border rounded p-4">
<h4 className="mb-2 font-medium">Bar Chart</h4>
<ResponsiveContainer width="100%" height={320}>
<BarChart data={data}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="month" />
<YAxis />
<Tooltip />
<Bar dataKey="sales" />
</BarChart>
</ResponsiveContainer>
</div>
)
}