import React, {useContext} from "react"
import {UglyContext} from "./uglyContext"



function UglyThing(props) {
    const context = useContext(UglyContext)
    return(
        <div>
            <h2>
                {props.inputTitle}
            </h2>
            <br/>
            <div className="image">
                <img className="pic" 
                     height="350px" 
                     width="350px" 
                     src={props.imgUrl}/>
            </div>
            <br />
            <p>
                {props.description}
            </p>
            <button onClick={context.handleEdit}>Edit</button>
            <br />
            <button onClick={context.handleDelete}>Delete</button>
        </div>
    )
}
export default UglyThing