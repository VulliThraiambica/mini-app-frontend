import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contextprovider from './contexts/Contextprovider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* add context provider at root level */}
    <Contextprovider>
      <App />
      </Contextprovider>
    
  </StrictMode>,
)
