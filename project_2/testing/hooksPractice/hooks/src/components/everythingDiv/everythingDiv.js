import React, { useState, useEffect } from 'react';

function EverythingDiv() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("aYour Key")
        // .then(response => response.json())
        .then(data => setData(data));
    }, []); // << super important array

    console.log(data);


    return (
        <div>
            hello
        </div>
    );
}

export default EverythingDiv;