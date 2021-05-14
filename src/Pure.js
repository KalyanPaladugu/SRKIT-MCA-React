import React, { PureComponent } from 'react'

export class Pure extends PureComponent {
    render() {
        console.log("****** Pure Component *********")
        return (
            <div>
                <h1>Pure component {this.props.name}</h1>
            </div>
        )
    }
}

export default Pure
