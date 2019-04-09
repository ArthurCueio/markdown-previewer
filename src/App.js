import React, { Component } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Footer from './components/Footer';
import DEFAULT_MARKDOWN_TEXT from './data/defaultMarkdown';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: DEFAULT_MARKDOWN_TEXT
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  render() {
    return (
      <div id="main">
        <Editor input={ this.state.text } handleChange={ this.handleChange }/>
        <Preview input={ this.state.text }/>
        <Footer />
      </div>
    );
  }
}

export default App;
