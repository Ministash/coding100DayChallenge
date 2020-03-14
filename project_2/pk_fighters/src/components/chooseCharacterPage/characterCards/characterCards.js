import React from "react";
import './characterCards.css';
import characters from "../charactStats.json";

class characterCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newProps : props.props
        };
    }

    componentDidMount(){
        
    }

    render() {
        
        return (
            <div className="cards">
            <div>name : {characters.character_1.name}</div>
            <div>health : {characters.character_1.health}</div>
            <div>armor : {characters.character_1.armor}</div>
            <div>attack : {characters.character_1.attack}%</div>
        </div>

        )
    }
};

export default characterCards;
