import React,{useContext} from "react"
import {UglyContext} from "./uglyContext"
import UglyThing from "./UglyThing"


function UglyThingsList(props) {
    const {uglyThings} = useContext(UglyContext)
    return(
        <div>
            {uglyThings.map(uglyThing => <UglyThing {...uglyThing}/>)}
        </div>
    )
}
export default UglyThingsList 