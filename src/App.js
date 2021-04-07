import './App.scss';
import React from 'react';
import InputWell from "./InputWell";
import MarkdownPreview from "./MarkdownPreview";

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
  return (
    <div className="App" type="text">
      <h1>HTML Markdown Previewer</h1>
      <InputWell/>
      <MarkdownPreview/>
    </div>
  );
  }
}

export default App;
