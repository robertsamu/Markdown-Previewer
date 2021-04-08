import React from 'react';
import MarkdownPreview from "./MarkdownPreview";
import Navbar from "./Navbar";

class InputWell extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input_text: "#A\n##B\n```abcdefgh```",
            textarea_width: '10px',
            active_window: "both"
        }
        this.changeWindowSize = this.changeWindowSize.bind(this)
    }

    handleChange(event){
        console.log(event)
        this.setState({
            input_text: event.target.value
        })
    }

    changeWindowSize(props){
        this.setState({
            active_window: (props === this.state.active_window ? "both" : props)
        })
    }

    render(){
        if(this.state.active_window === "both")
        return(
            <div className="Wells">
                <div className = "editor">
                    <Navbar title = {'Editor'} 
                            width = {this.state.textarea_width} 
                            changeWindowSize = {this.changeWindowSize.bind(this)}
                    />
                    <textarea id="editor" value = {this.state.input_text} onChange = {this.handleChange.bind(this)}> </textarea>
                </div>
                <MarkdownPreview value = {this.state.input_text} changeWindowSize = {this.changeWindowSize.bind(this)}/>
            </div>
        );
        else if(this.state.active_window === 'Editor') {
            return(
                <div className = "editor Full" id="editor">
                    <Navbar title = {'Editor'} 
                            width = {this.state.textarea_width} 
                            changeWindowSize = {this.changeWindowSize.bind(this)}
                    />
                    <textarea id="editor" value = {this.state.input_text} onChange = {this.handleChange.bind(this)}> </textarea>
                </div>
            );
        }
        else{
            return(
            <div className="Full">
                <MarkdownPreview value = {this.state.input_text} changeWindowSize = {this.changeWindowSize.bind(this)}/>
            </div>
            );
        }
    }
}

export default InputWell;