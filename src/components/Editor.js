import React, { Component } from 'react';
import './Editor.css';

class Editor extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Editor</h1>
        <textarea
          id="editor"
          value={this.props.input}
          onChange={this.props.handleChange}>
        </textarea>
      </div>
    );
  }
}

export default Editor;