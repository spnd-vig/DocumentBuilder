
import React, { useState } from 'react'
import './App.css'

function App() {
  const [document, setDocument] = useState('')

  return (
    <div className="app">
      <h1>DocumentBuilder</h1>
      <textarea
        value={document}
        onChange={(e) => setDocument(e.target.value)}
        placeholder="Start typing your document..."
      />
    </div>
  )
}

export default App
