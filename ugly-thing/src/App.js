import React, {useState} from 'react';
import forms from "/forms";


function App() {
  const [inputTitle, setInputTitle] = useState()

  function handleChange(event) {
    const {inputTitle} = event.target
    setInputTitle

  }
  return (
    <div>
    
        <form>
          <input 
              placeholder="Title"
              name="title"
              value={inputTitle.title}
              onChange={handleChange}/>
        </form> 
        
    </div>
  );
}

export default App;
