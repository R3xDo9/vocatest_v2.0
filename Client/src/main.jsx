import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ResultsPage from './ResultsPage';
import AppTest from './Test';
import { Route, Routes} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}/> 
        <Route path='/test' element={<AppTest/>}/>
        <Route path='/results/:id' element={<ResultsPage/>}/>
      </Routes>
  </BrowserRouter>,
)
