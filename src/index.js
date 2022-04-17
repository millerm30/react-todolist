import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import TodoContainer from './components/TodoContainer'

const createElement = document.querySelector('#root')
const root = createRoot(createElement)

root.render(
  <StrictMode>
    <TodoContainer />
  </StrictMode>
)