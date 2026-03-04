import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/* function Hello(props) { // React components are functions 
  return <h1>Hello {props.target}!</h1>
} 

/* createRoot(document.getElementById('root')).render( // Can not use plain javascript inside the render
  <>
    <Hello target="Bono"/>
    <Hello target="Batman"/>
    <Hello target="Iron Man"/>
  </>
) */

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
