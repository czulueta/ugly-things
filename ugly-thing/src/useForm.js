import React, {useState} from "react"

function Forms() {
    const [inputTitle, setInputTitle] = useState()

  function handleChange(event) {
    const {inputTitle} = event.target
    setInputTitle

    return[inputTitle, handleChange]
}
export default Forms