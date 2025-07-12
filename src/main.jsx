import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Event from './components/Event.jsx'

import Domain from './components/Domain.jsx'
import ScrollAnimationDemo from './components/ScrollAnimationDemo.jsx'
import CardComponent from './components/CardComponent.jsx'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScrollAnimationDemo />
    
    <CardComponent/>
    
  </StrictMode>
);
