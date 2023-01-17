import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import './App.css';
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<TodoContainer />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="*"
            element={<NotMatch />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
