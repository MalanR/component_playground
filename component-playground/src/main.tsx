import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GalaryView from './GalaryView.tsx'
import { Header } from './header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <GalaryView />
  </StrictMode>,
)
