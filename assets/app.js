import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import TodoContextProvider from './contexts/ToDoContext';
import TodoTable from './components/TodoTable';

class App extends React.Component {
  render() {
    return (
      <TodoContextProvider>
        <TodoTable></TodoTable>
      </TodoContextProvider>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);