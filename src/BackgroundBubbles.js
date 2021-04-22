import React from 'react';

class BackgroundBubbles extends React.Component{
    constructor(props){
        super(props);
        this.state = { width: window.innerWidth, height: window.innerHeight };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    getBubbleStyle(){
        let top = Math.floor(Math.random()*this.state.height);
        let left = Math.floor(Math.random()*this.state.width);
        let bubble_width = this.randomIntFromInterval(20, 206) + (this.state.width-300)*0.24;
        let bubble_height = this.randomIntFromInterval(60, 186) + (this.state.width-300)*0.24;

        while((left + bubble_width) >= this.state.width){
            left = Math.floor(Math.random()*this.state.width-300);
            bubble_width = this.randomIntFromInterval(20, 106) + (this.state.width-300)*0.24;
        } 
        
        let top_border = this.randomIntFromInterval(30, 75);
        let right_border = this.randomIntFromInterval(30, 75);
        let bottom_border = this.randomIntFromInterval(30, 75);
        let left_border = this.randomIntFromInterval(30, 75);

        return (
            {
                "top":top,
                "left":left,
                "width":bubble_width,
                "height":bubble_height,
                "borderRadius": `${top_border}% ${100-top_border}% ${bottom_border}% ${100-bottom_border}% / ${left_border}% ${right_border}% ${100-right_border}% ${100-left_border}%`
            }
        );
    }

    render(){
        let bubbles = [];
        let posses = [];
        for(let i = 0; i<=8-(this.state.width-300)/340; i++)
        {
            let bubble_style = this.getBubbleStyle();
            let overlap = true;
            let prevent_infin = 0;
            
            while(overlap){
                overlap = false;
                for(let z = 0; z<posses.length; z++){
                    overlap = !((bubble_style.left+(bubble_style.width/2)) < (posses[z].left-(posses[z].width/2)) ||
                                (bubble_style.left-(bubble_style.width/2)) > (posses[z].left+(posses[z].width/2)) ||
                                (bubble_style.top+(bubble_style.height/2)) < (posses[z].top-(posses[z].height/2)) ||
                                (bubble_style.top-(bubble_style.height/2)) > (posses[z].top+(posses[z].height/2)));
                    if(overlap)
                        break;
                }
              
                if(overlap) {
                    bubble_style = this.getBubbleStyle();
                }
                prevent_infin++;
                if(prevent_infin>20){break;}
            }
            
            posses.push(bubble_style);
            bubbles.push(<div className="background-el" style={bubble_style} key={bubble_style.left}></div>);
        }

        return(
            <div>
                {bubbles}
            </div>
        );
    }
}

export default BackgroundBubbles;