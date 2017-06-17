import React, { Component } from 'react';


class GamesCrudComponent extends Component {
  render() {
    return (
      <div className="myeachgame">
        <li>Title: {this.props.gamename}</li>
        <img src ={this.props.imageurl}/>
        <li>Summary: {this.props.summary}</li>
        <li>Rating: {this.props.rating}</li>  
        <li>Playing Status: {this.props.status_id}</li>
        <button onClick={()=>{this.props.handleDelete(this.props.wholestuff.id)}}>Deleeteyo</button>
      </div>
    )
  }
}
export default GamesCrudComponent;