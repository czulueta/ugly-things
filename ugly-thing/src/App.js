import React, {useEffect} from "react"
import Form from "./Form"
import UglyThingsList from "./UglyThingsList"
import axios from 'axios'



function App() {
  useEffect(() => {
    axios.get('https://api.vschool.io/cesar/todo')
      .then(res => {
        console.log(res.data)
      })
  },[])
  
  return (
    <div>
    
       <Form />
       <UglyThingsList />
        
    </div>
  );
}

export default App;
