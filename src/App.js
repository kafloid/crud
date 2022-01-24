import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Pages
import Login from './components/common/Login';
import SignUp from './components/common/Register';
import Home from './components/pages/Home';
import Todo from './components/common/Todo';
import Reset from './components/common/Reset';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (

    <Routes>
      <Route exact={true} path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<SignUp />}></Route>
      <Route path="/todo" element={<Todo />}></Route>
      <Route path="/reset" element={<Reset />}></Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>

  );
}

export default App;
