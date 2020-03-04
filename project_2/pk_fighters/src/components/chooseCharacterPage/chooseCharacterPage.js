import React from "react";
import "./chooseCharacterPage.css";
// import {Link} from "react-router-dom";
import characters from "./charactStats.json";

class chooseCharacter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerCharacterChoice: ''
        };
    }


    changePlayerChoices = (choice) =>{
        this.setState({playerCharacterChoice : choice});
    }

    render() {
        
        return (
            <div>
                <div>Welcome In! Choose Your Character Young Adventurer</div>

                <div onClick={() => this.changePlayerChoices("character_1")} className="cards">
                    <div>name : {characters.character_1.name}</div>
                    <div>health : {characters.character_1.health}</div>
                    <div>armor : {characters.character_1.armor}</div>
                    <div>attack : {characters.character_1.attack}%</div>
                </div>

                <div className="cards">
                    <div>name : {characters.character_2.name}</div>
                    <div>health : {characters.character_2.health}</div>
                    <div>armor : {characters.character_2.armor}</div>
                    <div>attack : {characters.character_2.attack}%</div>
                </div>

                <div className="cards">
                    <div>name : {characters.character_3.name}</div>
                    <div>health : {characters.character_3.health}</div>
                    <div>armor : {characters.character_3.armor}</div>
                    <div>attack : {characters.character_3.attack}%</div>
                </div>



            </div>

        )
    }
};

export default chooseCharacter;