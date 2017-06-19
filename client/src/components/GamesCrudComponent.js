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
        {/*<li>game id : {this.props.id}</li>*/}
        <form onSubmit={event=>this.props.handleEditSubmit(event, this.props.id)}>
            <select name="status_id" >
              <option selected disabled>Edit Status</option>
              <option value="1">Plan To Buy</option>
              <option value="2">Playing</option>
              <option value="3">Completed</option>
              <option value="4">Dropped</option>
           </select>
          <input type="submit" value="Edit this"/>
       </form>  
        <button onClick={()=>{this.props.handleDelete(this.props.id)}}>Delete From List</button>
        {/*<button onClick={()=>{this.props.handleEditSubmit(this.props.id)}}>Edit This</button>*/}
        
      </div>
    )
  }
  }

export default GamesCrudComponent;