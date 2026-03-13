import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
//import App from './AppCourse.jsx'
//import App from './AppCounter.jsx'
//import App from './AppPure.jsx'
//import App from './AppTodo.jsx'
//import App from './AppMovingDot.jsx'
import App from './AppTheme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
