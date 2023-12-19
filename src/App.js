import './App.css';
import {Route, Routes} from 'react-router-dom'
import '../src/component/signup'
import Form from './component/signup'
import Users from './component/Users/User';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Form/>}/>
          {/* <Route path='/Show/Users' element={<Users/>}/> */}
        </Routes>
        {/* <Form/>
        <Users/> */}
      </header>
    </div>
  );
}

export default App;
