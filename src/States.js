import React,{Component} from 'react'


class Count extends Component {

    constructor(){
        super();
        this.state={
            name:"Kalyan"
        }
    }

    dataChange=()=> {

        this.setState({
            name:"sam"
        })

    }

   
    render(){
        setTimeout(()=>{ this.setState({
            name:"gopi"
        })},5000)
        return (
            <div>
                {this.state.name}
                <button onClick={this.dataChange}>Click</button>
            </div>
        )
    }
}

export default Count;