'use client'
import { useState } from 'react'

export default function AdminPage() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    framework: 'Next.js',
    image: '',
    link: '',
    price: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, price: parseFloat(form.price) })
    })
    const data = await res.json()
    alert(data.message)
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Add New Product</h1>
      <input name="title" placeholder="Title" onChange={handleChange} className="border p-2 my-2 block" />
      <input name="description" placeholder="Description" onChange={handleChange} className="border p-2 my-2 block" />
      <select name="framework" onChange={handleChange} className="border p-2 my-2 block">
        <option value="Next.js">Next.js</option>
        <option value="Chainlit">Chainlit</option>
        <option value="Streamlit">Streamlit</option>
        <option value="uv">uv</option>
      </select>
      <input name="image" placeholder="Image URL" onChange={handleChange} className="border p-2 my-2 block" />
      <input name="link" placeholder="Live Link" onChange={handleChange} className="border p-2 my-2 block" />
      <input name="price" placeholder="Price" onChange={handleChange} className="border p-2 my-2 block" type="number" />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2">Add Product</button>
    </div>
  )
}
