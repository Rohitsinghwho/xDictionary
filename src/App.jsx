import React, { useState } from "react";

const App = () => {
  const [InputValue, setInputValue] = useState('');
  const [definition, setDefi] = useState('');
  const [errors,setErrors]=useState('');
  const dict = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const getMeaning=(word)=>{
    return new Promise((resolve) => {
          setTimeout(() => {
           if(!word)return resolve(null);
           const found=dict.find((item)=>item.word.toLowerCase()===word);
           resolve(found?found.meaning:null);
          }, 1000);
      
    })
  }
  const handleForm=async (e)=>{
    e.preventDefault();
    if(InputValue.length==0){
      setErrors("Please Enter a value to Search");
      return;
    }

    try {
      const meaning= await getMeaning(InputValue.trim().toLowerCase());
      
      if(!meaning){
        setDefi('Word not found in the dictionary.');
      }
      else setDefi(meaning);
      setInputValue('');
    } catch (error) {
      console.log(error);
      setDefi("Something went wrong")
    }finally{
      setErrors('');
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
      <p>{definition||errors}</p>
    </div>
  );
};

export default App;
