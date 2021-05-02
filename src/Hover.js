import React from 'react'

class Hover extends React.Component {
     
  constructor(){
      super();
      this.state={
          name:"initial"
      }
  }

    render(){
    return (
        <div>
            <button onMouseOver={()=>{ this.setState({ name:"onoveer"})}} 
            onMouseLeave={()=>{ this.setState({ name:"onleave"})}}> {this.state.name}</button>
        </div>
    )

    }
}


export default Hover