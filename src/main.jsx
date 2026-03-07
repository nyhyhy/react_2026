import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import AppCounter from './AppCounter.jsx'
//import App from './AppPure.jsx'
//import App from './AppTodo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AppCounter />
    {/* <App /> */}
  </StrictMode>
)
