import React, { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState('');
  const [output, setOutput] = useState('');

  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const handleSearch = () => {
    const foundWord=dictionary.find((item)=>{
       return item.word.toLowerCase()===search.toLowerCase()
    })
    if(foundWord){
      setOutput(foundWord.meaning)
    }
    else{
      setOutput('Word not found in the dictionary.')
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search</button>
      <h4>Definition:</h4>
      <p>{output}</p>
    </div>
  );
}

export default App;
