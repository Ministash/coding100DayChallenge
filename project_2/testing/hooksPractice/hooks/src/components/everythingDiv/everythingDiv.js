import React, { useState, useEffect } from 'react';

function EverythingDiv() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("api.airvisual.com/v2/countries?key={{abae3280-3f3f-4f52-816e-45b35bedd93a}}")
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