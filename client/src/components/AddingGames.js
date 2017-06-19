import React, {Component } from 'react';
class AddingGames extends Component {
  constructor() {
    super();
    this.state = {
      gamestatus: "",
      gameAdded: false,
    }
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleGameSubmit = this.handleGameSubmit.bind(this);
  }

  handleStatusChange(event) {
    this.setState({gamestatus: event.target.value}, () => {
      console.log(this.state.gamestatus)
    })
  }

  handleGameSubmit(event) {
    event.preventDefault();
    console.log(this.state.gamestatus);

    fetch('/games', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        // gamedata: {
          gamename: this.props.gameDetailsData[0].name,
          summary: this.props.gameDetailsData[0].summary,
          rating: this.props.gameDetailsData[0].aggregated_rating,
          imageurl: this.props.gameDetailsData[0].cover.url,
          status_id: this.state.gamestatus,
          // status_id: event.target.status_id.value,
          //line 32 and 33 are same?
        // }
      })    
    }).catch(err => console.log('boooohooooo ',err))
    this.setState({gameAdded: true})   
  }
//     handleGameSubmit(event) {
//     event.preventDefault();
//     console.log(this.state.gamestatus);
//     fetch('/games')
// .then((response)=> {
// response.json()
// .then((mydata)=>{
//     console.log(mydata);
// })})};

  render() {
    //console.log(this.props.gameDetailsData, "here is my final data")
        return (
          <div className="formForPost">
              <p className="gametitle">Title: {this.props.gameDetailsData[0].name}</p>
              <img src={this.props.gameDetailsData[0].cover.url} alt={this.props.gameDetailsData[0].name}/>
              <p className="gamesummary">Game Summary: {this.props.gameDetailsData[0].summary}</p>
              <p className="gamerating">Rating: {this.props.gameDetailsData[0].aggregated_rating}</p>
              <p className="releasedate">Release Date: {this.props.gameDetailsData[0].release_dates[0].human}</p>

              <form onSubmit={this.handleGameSubmit}>
                  <input type="hidden" value={this.props.gameDetailsData[0].name} name="gamename" />
                  <input type="hidden" value={this.props.gameDetailsData[0].summary} name="summary" />
                  <input type="hidden" value={this.props.gameDetailsData[0].aggregated_rating} name="rating" />
                  <input type="hidden" value={this.props.gameDetailsData[0].cover.url} name="imageurl" />
                  <select name="status_id" onChange={this.handleStatusChange}>
                    <option selected disabled>Select Status</option>
                    <option value="1">Plan To Buy</option>
                    <option value="2">Playing</option>
                    <option value="3">Completed</option>
                    <option value="4">Dropped</option>
                  </select>
                 <input type="submit" value="save my status"/>
              </form>          

          </div>
        )
  }

}

export default AddingGames; 