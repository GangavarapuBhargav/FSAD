import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Register from './register.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import Login from './Login.jsx'
import { BrowserRouter} from 'react-router-dom';
import Home from './Home.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
)
