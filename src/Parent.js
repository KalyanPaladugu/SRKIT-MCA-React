import React, { Component,PureComponent } from 'react'
import Reg from './Reg'
import Pure from './Pure'
export default class Parent extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Kalyan"
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({name:"Kalyan"})
        }, 2000);
    }
    
    render() {
        console.log("*************** Parent Component ***************")
        return (
            <div> <h1> Parent Component</h1>
                <Reg name ={this.state.name}/>
                <Pure name ={this.state.name}/>
            </div>
        )
    }
}
