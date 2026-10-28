import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
{/*Тут я импортировал бровсер роутер для управление маршрутизации переключение страниц*/}
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* тут я его оборачиваю в галавные компанет что бф его там использовать*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </StrictMode>,
)
