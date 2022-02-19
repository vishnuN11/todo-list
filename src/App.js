
import './App.css';
import axios from "axios"
import {useEffect,useState} from "react"
import {BrowserRouter,Route} from "react-router-dom"
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AddTodo from './pages/AddTodo';
import Edit from './pages/Edit';
function App() {

  
  return (
    <BrowserRouter>
    <Navbar/>
    <Route path={"/"} exact component={Home}></Route>
    <Route path={"/add-todo"}  component={AddTodo}></Route>
    <Route path={"/edit-todo"}  component={Edit}></Route>
    
    </BrowserRouter>
  );
}

export default App;
