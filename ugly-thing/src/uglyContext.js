import React, {useContext, useState} from "react"
// import useForm from "./useForm"

const UglyContext = React.createContext()

function UglyContextProvider(props) {
    const [uglyThings, setUglyThings] = useState([])

    function handleSubmit(event, newThing) {
        event.preventDefault()
        setUglyThings(prevUglyThings => [...prevUglyThings, newThing])
    }
    

    return(
        <UglyContext.Provider value={{uglyThings, handleSubmit}}>
           {props.children}
        </UglyContext.Provider>
    )
}
export {UglyContextProvider, UglyContext}