import React from 'react';

class InputWell extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<textarea id="editor">
        "#A\n##B\n```abcdefgh```"        </textarea>);
    }
}

export default InputWell;