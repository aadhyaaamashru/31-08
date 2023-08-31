// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Homepage from './components/homepage';
import Login from './components/login';
import SingleStudent from './components/SingleStudent'

function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Login/>}/>
<Route path=":username" element={<SingleStudent/>}/>
</Routes>
</BrowserRouter>
  );
}


export default App;
