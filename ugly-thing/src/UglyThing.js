import React from "react"

function UglyThing(props) {
    return(
        <div>
            <h1>
                {props.inputTitle}
            </h1>
            <br/>
            <div className="image">
                {props.imgUrl}
            </div>
            <br />
            <p>
                {props.description}
            </p>
        </div>
    )
}
export default UglyThing