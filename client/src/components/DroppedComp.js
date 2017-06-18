import React, { Component } from 'react';


class PlayingComp extends Component {
  constructor(props){
  super(props)
  this.state={
      myGameLoaded: false,
      myGameData: [],  
    }
    this.rendergame = this.rendergame.bind(this);
  }

  componentDidMount() {
    fetch('/dropped')
    .then((response)=> {
        response.json()
        .then((jsonResp)=>{
      console.log(jsonResp, 'my database stuff');
        this.setState({
          myGameLoaded:true,
          myGameData: jsonResp,
        })
        })
      })
    }

  rendergame() {
    if(this.state.myGameLoaded===true)
    return (
      <ul>{this.state.myGameData.gamedata.map((elem)=>{
        return(
          <div className="droppeddiv">
          <li>Title: {elem.gamename}</li>
            <img src ={elem.imageurl} alt ={this.props.title}/>
            <li>Summary: {elem.summary}</li>
            <li>Rating: {elem.rating}</li>
            <li>Playing Status: {elem.status_id}</li>
            </div>
        )
      })
    }
        </ul>
    )}
  
  
  render() {
    return (
      <div>
          {this.rendergame()}
      </div>
    )
  }
}
export default PlayingComp;