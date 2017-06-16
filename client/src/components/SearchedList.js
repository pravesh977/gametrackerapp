import React, {Component } from 'react';
import AddingGames from './AddingGames';
class SearchedList extends Component {
  constructor() {
    super();
    this.state = {
      gameDetailsLoaded: false,
      gameDetailsData: [],
    }
    this.handleSecondFetchButtons = this.handleSecondFetchButtons.bind(this);
    this.addToDb = this.addToDb.bind(this);
  }



  handleSecondFetchButtons(event) {
    event.preventDefault();
    //console.log('hey hey', this.props.searchedgameid);
    fetch(`https://igdbcom-internet-game-database-v1.p.mashape.com/games/${this.props.searchedgameid}?fields=*`, {
	    headers: new Headers({
		    'X-Mashape-Key': 'S7ahf9mVUAmshSEPRTB9D8KX3I1Jp1vFO9PjsnbTwa2PWiR8s9',
        'Accept': 'application/json'
	      })
        }).then((response)=> {
          response.json()
          .then((gameData)=>{
          //console.log(gameData);
          this.setState({
            gameDetailsLoaded: true,
            gameDetailsData: gameData,
          })
      console.log(this.state.gameDetailsData,'this particular game')
      })
    }) 
    // return (
    //     <AddingGames 
    //         gameDetailsData={this.state.gameDetailsData} />
    // )
    // {this.addToDb()}
  }

  addToDb() {
    if(this.state.gameDetailsLoaded===true){
    return (
        <AddingGames 
            gameDetailsData={this.state.gameDetailsData} />
    )
    }
  }

  render () {
    return (
      <div className="secondSearchForm">
        {/*<li className="searchedlistclass"><button>{this.props.searchedname}</button></li>*/}
        <form onSubmit = {this.handleSecondFetchButtons} >
        <input type = "submit" value={this.props.searchedname}/>
        </form>
        {this.addToDb()}
      </div>
    )
  }
}
export default SearchedList;