import React, {useContext, useState} from "react"

import {UglyContext} from "./uglyContext"


function Form(props) {
    const context = useContext(UglyContext)
    // const [inputTitle, imgUrl, description, handleChange, handleSubmit] = useForm()

    const [inputTitle, setInputTitle] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [description, setDescription] = useState("")
    

const newThing = {inputTitle, imgUrl, description}  
    return(
        <div>
            <form onSubmit={(e) => context.handleSubmit(e,newThing)}>
                <input 
                type="text"
                placeholder="Title"
                name="inputTitle"
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}/>
                <input 
                type="text"
                placeholder="Image Url"
                name="imgUrl"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}/>
                <input
                type="text" 
                placeholder="Description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}/>
                <button >Submit</button>
            </form>
        </div>
    )
}
export default Form