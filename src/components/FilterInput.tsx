'use client'


import React, { useState } from 'react'


export default function FilterInput({ onFilter }: { onFilter: (v: number) => void }) {
const [value, setValue] = useState<string>('')


return (
<div className="flex items-center gap-3">
<input
type="number"
placeholder="Minimum sales (e.g. 1000)"
value={value}
onChange={(e) => setValue(e.target.value)}
className="border rounded p-2"
/>
<button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => onFilter(Number(value) || 0)}>Apply Filter</button>
<button className="px-3 py-2 bg-gray-200 rounded" onClick={() => { setValue(''); onFilter(0) }}>Clear</button>
</div>
)
}