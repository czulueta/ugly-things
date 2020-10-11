import React, {useState} from "react"
import Form from "./Form"
import axios from "axios"
// import useForm from "./useForm"

const UglyContext = React.createContext()

function UglyContextProvider(props) {
    const [uglyThings, setUglyThings] = useState([])

    function handleSubmit(event, newThing) {
        event.preventDefault()
        axios.post('https://api.vschool.io/cesar/todo', newThing)
            .then(res => {
                setUglyThings(prevUglyThings => [...prevUglyThings, res.data])
            })
    }


    function handleDelete(id){
        axios.delete(`https://api.vschool.io/cesar/todo/${id}`)
            .then(res => {
                setUglyThings(prevUglyThings => prevUglyThings.filter(newThing === newThing._id))
            })
    }

    function handleEdit(id) {
        axios.put(`https://api.vschool.io/cesar/todo/${id}`)
        .then(res => {
            setUglyThings(prevUglyTHings => prevUglyThings.filter(newThing === newThing._id))
        })
    }
    

    

    return(
        <UglyContext.Provider value={{uglyThings, handleSubmit}}>
           {props.children}
        </UglyContext.Provider>
    )
}
export {UglyContextProvider, UglyContext}