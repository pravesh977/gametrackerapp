import React, {Component } from 'react';
class SearchedList extends Component {
  constructor() {
    super();
    this.state = {
      gameDetailsLoaded: false,
      gameDetailsData: [],
    }
    this.handleSecondFetchButtons = this.handleSecondFetchButtons.bind(this);
  }



  handleSecondFetchButtons(event) {
    event.preventDefault();
    console.log('hey hey', this.props.searchedgameid);
    fetch(`https://igdbcom-internet-game-database-v1.p.mashape.com/games/${this.props.searchedgameid}?fields=*`, {
	    headers: new Headers({
		    'X-Mashape-Key': 'S7ahf9mVUAmshSEPRTB9D8KX3I1Jp1vFO9PjsnbTwa2PWiR8s9',
        'Accept': 'application/json'
	      })
        }).then((response)=> {
          response.json()
          .then((mydata)=>{
          console.log(mydata);
      })
    })
  }

  // fetchGameDetails () {
  //     fetch(`https://igdbcom-internet-game-database-v1.p.mashape.com/games/${this.props.searchedgameid}?fields=*`, {
	//     headers: new Headers({
	// 	    'X-Mashape-Key': 'S7ahf9mVUAmshSEPRTB9D8KX3I1Jp1vFO9PjsnbTwa2PWiR8s9',
  //       'Accept': 'application/json'
	//       })
  //       }).then((response)=> {
  //         response.json()
  //         .then((mydata)=>{
  //         console.log(mydata);
  //     })
  //   })
  // }


  render () {
    return (
      <div className="secondSearchForm">
        {/*<li className="searchedlistclass"><button>{this.props.searchedname}</button></li>*/}
        <form onSubmit = {this.handleSecondFetchButtons} >
        <input type = "submit" value={this.props.searchedname}/>
        </form>
      </div>
    )
  }
}
export default SearchedList;