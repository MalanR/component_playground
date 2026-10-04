import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './index.css'
import GalaryView from './GalaryView.tsx'
import { Header } from './header.tsx'

export function App() {
  const [selectedTab, setSelectedTab] = useState('All')

  return (
    <>
      <Header selectedTab={selectedTab} onTabChange={setSelectedTab} />
      <GalaryView />
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
