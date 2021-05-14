import React, { PureComponent } from 'react'
import UpdatedComponent from './withCounter'
export class ClickCounter extends PureComponent {

    render() {
        const {count,increment} =this.props
        return (
            <div>
               <button onClick={increment}> {this.props.name}  Clicked {count} times</button> 
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)
