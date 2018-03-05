import React, { Component } from 'react';
import './App.css';
import Uploader from './components/Uploader';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>GFH Related Swatch Search</h1>
        </header>
        <Uploader />
      </div>
    );
  }
}

export default App;