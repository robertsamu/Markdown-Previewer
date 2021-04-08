import React from 'react';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            width: this.props.width
        }
    }
    render(){
        var changeWindowSize = this.props.changeWindowSize;
        return (
            <div className = "Navbar">
                {this.props.title} 
                <button className = "Nav-Button" onClick={() => changeWindowSize(this.props.title)}><i class="fa fa-arrows-alt" ></i></button>
            </div>
        );
    }
}

export default Navbar;