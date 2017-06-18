import React, { Component } from 'react';


class GamesCrudComponent extends Component {

  render() {
   
    return (
      <div className="myeachgame">
        <li>Title: {this.props.gamename}</li>
        <img src ={this.props.imageurl} alt ={this.props.title}/>
        <li>Summary: {this.props.summary}</li>
        <li>Rating: {this.props.rating}</li>  
        <li>Playing Status: {this.props.status_id}</li>
        <button onClick={()=>{this.props.handleDelete(this.props.id)}}>Delete From List</button>
        <button onClick={()=>this.props.editClicked(console.log(this.props.id))}>Change Game Status</button>
      </div>
    )
  }
  }

export default GamesCrudComponent;