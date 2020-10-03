import React, {useContext, useState} from "react"

import {UglyContext} from "./uglyContext"


function Form(props) {
    const context = useContext(UglyContext)
    // const [inputTitle, imgUrl, description, handleChange, handleSubmit] = useForm()

    const [inputTitle, setInputTitle] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [description, setDescription] = useState("")
    

  function handleChange(event) {
    const {name, value} = event.target
    setInputTitle( prevInputTitle => ({...prevInputTitle, [name]: value}))
  }
    return(
        <div>
            <form>
                <input 
                placeholder="Title"
                name="inputTitle"
                value={inputTitle.value}
                onChange={handleChange}/>
                <input 
                placeholder="Image Url"
                name="imgUrl"
                value={imgUrl.value}
                onChange={handleChange}/>
                <input 
                placeholder="Description"
                name="description"
                value={description.value}
                onChange={handleChange}/>
                <button onClick={context.handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default Form