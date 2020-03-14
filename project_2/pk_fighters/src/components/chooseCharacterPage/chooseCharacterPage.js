import React from "react";
import "./chooseCharacterPage.css";
// import {Link} from "react-router-dom";
import CharacterCards from "./characterCards/characterCards";

class chooseCharacter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerCharacterChoice: '',
            numberOfCharacters : [1, 2, 3]
        };
    }


    changePlayerChoices = (choice) =>{
        this.setState({playerCharacterChoice : choice});
    }

    render() {
        return (
            <div>
                <div>Welcome In! Choose Your Character Young Adventurer</div>

                {this.state.numberOfCharacters.map(number => {
                    return <div key={number} onClick={() => this.changePlayerChoices("character_" + number)}><CharacterCards props={number}/></div> 
                })}
                



            </div>

        )
    }
};

export default chooseCharacter;