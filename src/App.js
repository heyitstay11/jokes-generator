import React, { useState, useEffect } from 'react';
import C from './c.png';
import Custom from './Custom';

let API_URL = `http://api.icndb.com/jokes/random`;
let firstName = null;
let lastName = null;


function App() {
  const [joke, setJoke] = useState('');

  const updateName = (name) =>{
    firstName = name['firstName'];
     lastName = name['lastName'];
     generateJoke();
  }

  const generateJoke = () =>{
   if(firstName && lastName) API_URL = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}` ;
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setJoke(data.value.joke));
  }

  useEffect(()=>{
   generateJoke();
  },[])
    return (
      <div>
        <div className="box">
          <div className="left">
            <h2> Chuck Norris Jokes Generator</h2>
              <p dangerouslySetInnerHTML={joke ? {__html:joke} :{__html: `Chuck is finishing his beer ... Wait a Sec `}}></p>
            <button onClick={generateJoke}> Get new joke</button>  
            <a href="#custom">
              <span>Customize</span>
            </a>
          </div>
              <img className="right" src={ C } alt="Chuck Norris" height="280px" />
        </div>
        <Custom updateName={updateName} />
      </div>
    )
}

export default App