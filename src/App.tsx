import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Card Title='My card' Image={logo} Alt="My logo" Body={
          <div>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
                    </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
                    </a>
          </div>
        } />
      </header>
    </div>
  );
}

export default App;
