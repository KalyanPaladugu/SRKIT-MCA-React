import React from 'react'

export default function Corp(props) {
    return (
        <div>
            <h1>This function component</h1>
            {props.name}  {props.location}
        </div>
    )
}
