import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ResultsPage from './ResultsPage';
import AppTest from './Test';
import ResponseDataPage from './ResponseDataPage.jsx';
import ProgramasU from './ProgramasU.jsx';
import { Route, Routes,  BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}/> 
        <Route path='/test' element={<AppTest/>}/>
        <Route path='/respuestas-data' element={<ResponseDataPage/>} />
        <Route path='/results/:id' element={<ResultsPage/>}/>
        <Route path='/programas-data' element={<ProgramasU/>}/>
      </Routes>
  </BrowserRouter>,
)
