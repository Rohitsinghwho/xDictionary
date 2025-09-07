import React, { useState } from "react";

const App = () => {
  const [InputValue, setInputValue] = useState('');
  const [definition, setDefi] = useState('');
  const [errors,setErrors]=useState(false);
  const dict = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleForm=async (e)=>{
    e.preventDefault();
    if (InputValue.trim().length === 0) {
    setErrors(true);
    setDefi('');
    return;
  }
    
      const meaning= dict.find((item)=>item.word.trim().toLowerCase()===InputValue.trim().toLowerCase());
      if(meaning){
        setErrors(false)
        setDefi(meaning.meaning);
      }else{
        setErrors(true)
        setDefi('')
      }
    
  }
  return (
    <div>
      <h1>Dictionary App</h1>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Search for a word"
          value={InputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <h3>Definition:</h3>
      <p>{errors?"Word not found in the dictionary.":definition}</p>
    </div>
  );
};

export default App;
