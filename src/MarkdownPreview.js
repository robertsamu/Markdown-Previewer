import React from 'react';
import marked from 'marked';
import Navbar from "./Navbar";

class MarkdownPreview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            textarea_width: '10px'
        }
    }
    render(){
        var changeWindowSize = this.props.changeWindowSize;
        
        return(<div id="preview">
        <Navbar title = {'Preview'} width = {this.state.textarea_width} changeWindowSize = {changeWindowSize}/>
        <div dangerouslySetInnerHTML={{__html: marked(this.props.value)}}/>
            
        </div>);
    }
}

export default MarkdownPreview;