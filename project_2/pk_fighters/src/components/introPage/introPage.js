import React from "react";
import "./introPage.css";
import {Link} from "react-router-dom";

class introPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {

        return (
            <button><Link to="/chooseCharacter">Start Game!</Link></button>
        )
    }
};

export default introPage;