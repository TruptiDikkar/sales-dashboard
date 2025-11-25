import './globals.css'
import React from 'react'


export const metadata = {
title: 'Sales Dashboard',
description: 'Sales dashboard built with Next.js 15, TypeScript, Tailwind, and Recharts'
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>
<div className="min-h-screen">
<header className="bg-white shadow-sm">
<div className="max-w-6xl mx-auto px-4 py-4">
<h1 className="text-xl font-semibold">Sales Dashboard</h1>
</div>
</header>


<main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
</div>
</body>
</html>
)
}