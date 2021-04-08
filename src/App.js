import './App.scss';
import React from 'react';
import InputWell from "./InputWell";


class App extends React.Component {
  // constructor(props){
  //   super(props)
  // }
  render(){
    return (
    <div>
      <div id="background-elements">
        <div className="background-el"> 
          
        </div>
        <div className="background-text-el"><p>&lt;p&gt;</p></div>
      </div>

      <div className="App" type="text">
        <h1>HTML Markdown Previewer</h1>
        
        <InputWell/>
      </div>
    </div>);
  }
}

export default App;
