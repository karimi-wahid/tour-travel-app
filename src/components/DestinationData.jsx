import { Component } from 'react';
import './DestinationStyles.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';


class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className="image">
                    <img src={this.props.img1} alt="mountain" />
                    <img src={this.props.img2} alt="mountain-1" />
                </div>
            </div>
        )
    }
}

export default DestinationData;
