import React, { Component } from 'react';
import './Preview.css';
import * as marked from 'marked';
import parse from 'html-react-parser';

marked.setOptions({
  breaks: true,
  gfm: true
});

class Preview extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Preview</h1>
        <div id="preview">{ parse(marked(this.props.input)) }</div>
      </div>
    );
  }
}

export default Preview;