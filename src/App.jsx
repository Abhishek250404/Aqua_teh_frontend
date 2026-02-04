import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Approutes from './components/Routes/Approutes';
import { Toaster } from "sonner";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toaster richColors position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Approutes />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
