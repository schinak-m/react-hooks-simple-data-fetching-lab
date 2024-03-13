// create your App component here
import React from "react";
import { useEffect, useState } from "react";

function App(){

    const [dogs, setDogs] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(resp => resp.json())
            .then(data => {
                setIsLoaded(true)
                setDogs(data.message)
            })
    }, [])

    if(!isLoaded){
        return <p>Loading ...</p>
    }else{
        return(
            <img src={dogs} alt="A Random Dog"/>
        )
    }
}

export default App;