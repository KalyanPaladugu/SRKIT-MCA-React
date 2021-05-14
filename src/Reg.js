import React, { Component } from 'react'

export default class Reg extends Component {
    render() {
        console.log("****** Regular Component ******")
        return (
            <div>
                <h1>Regular component {this.props.name}</h1>
            </div>
        )
    }
}
