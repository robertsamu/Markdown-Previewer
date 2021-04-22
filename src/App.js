import './App.scss';
import React from 'react';
import InputWell from "./InputWell";
import BackgroundBubbles from "./BackgroundBubbles";

class App extends React.Component {
  // constructor(props){
  //   super(props)
  // }
  render(){
    return (
    <div>
      <div id="background-elements">
        <BackgroundBubbles/>
        {//<div className="background-text-el"><p>&lt;p&gt;</p></div>
        }
      </div>

      <div className="App" type="text">
        <h1 className = "header">HTML Markdown Previewer</h1>
        
        <InputWell/>
      </div>
    </div>);
  }
}

export default App;
