
import './App.css';
import TextEditor from './TextEditor'
import {BrowserRouter,Routes,Route,useNavigate, Navigate} from 'react-router-dom'
import {v4 as uuidV4} from 'uuid'


function App() {
   
  return (
    <BrowserRouter>
      <Routes>
        
           <Route path="/" element={<Navigate to={`/documents/${uuidV4()}`} replace />} />
          <Route  path='/documents/:id' element = {<TextEditor/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
