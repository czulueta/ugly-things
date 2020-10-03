import {useState} from "react"



function useForm() {
    const [inputTitle, setInputTitle] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [description, setDescription] = useState("")
    

  function handleChange(event) {
    const {name, value} = event.target
    setInputTitle( prevInputTitle => ({...prevInputTitle, [name]: value}))

    return[inputTitle, imgUrl, description, handleChange ]
 }
}
export default useForm