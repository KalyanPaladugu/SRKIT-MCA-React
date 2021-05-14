import React, { PureComponent } from 'react'
import UpdatedComponent from './withCounter'
export class ClickCounter extends PureComponent {
  
    render() {
        const {count,increment} =this.props
        return (
            <div>
               <button onMouseOver={increment}>{this.props.name}  Hovered {count} times</button> 
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)
