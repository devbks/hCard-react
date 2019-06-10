import React,{Component} from 'react';
import Provider from './scripts/Context.js';
import Form from './components/Form';
import Preview from './components/Preview';
import './styles/Style.scss';

function App() {
  return (
    <Provider>
      <div className="grid-container">
        <div className="bg-fill"></div>
        <div className="segment">
          <Form/>
        </div>
        <div className="segment">
          <Preview/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
