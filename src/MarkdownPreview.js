import React from 'react';
import marked from 'marked';

class MarkdownPreview extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div id="preview">
        {marked("#A##B ```abcdefgh```[links](https://www.freecodecamp.com)`asdasdasda`- And of course there are lists.- Some are bulleted.asdas- With different indentation levels.- That look like this.> Block Quotes!asdasd**bold**![asdas](https://upload.wikimedia.org/wikipedia/commons/5/5e/ANA_flag_%282017%29.svg)")}
        </div>);
    }
}

export default MarkdownPreview;