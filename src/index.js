import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import TodoContainer from './components/TodoContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
);
