import React, { PureComponent } from 'react'

export class ClickCounter extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    

    increment=() =>{
        this.setState(prevState => {
            return {count:prevState.count+1}
        })
    }
    render() {
        const {count} =this.state
        return (
            <div>
               <button onMouseOver={this.increment}>Hovered {count} times</button> 
            </div>
        )
    }
}

export default ClickCounter
