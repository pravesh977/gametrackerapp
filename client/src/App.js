import React, { Component } from 'react';
import './App.css';
import SearchedList from './components/SearchedList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputgamesearch: "",
      searchedLoaded: false,
      searchedGames: [],
    }
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.handleGameSearchChange = this.handleGameSearchChange.bind(this);
    this.searchedRender = this.searchedRender.bind(this);
  }

  handleGameSearchChange(event) {
    this.setState({inputgamesearch: event.target.value})
  }

  handleSearchButton (event) {
    event.preventDefault();
    //console.log(this.state.handleGameSearchChange);    
    fetch(`https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name&limit=10&offset=0&order=release_dates.date%3Adesc&search=${this.state.inputgamesearch}`, {
	    headers: new Headers({
		  'X-Mashape-Key': 'S7ahf9mVUAmshSEPRTB9D8KX3I1Jp1vFO9PjsnbTwa2PWiR8s9',
      'Accept': 'application/json'
	      })
      }).then((response)=> {
      response.json()
      .then((mydata)=>{
      console.log(mydata, 'searched data');
      this.setState({
        searchedGames: mydata,
        searchedLoaded: true,
      })
      })
    });
  }

  searchedRender() {
    if(this.state.searchedLoaded===true) {
      // console.log('loaded man');
      // console.log(this.state.searchedGames[2].name);
      return(
      <ul>{this.state.searchedGames.map((elem)=>{
          return(
          <SearchedList searchedname={elem.name} key={elem.id} searchedgameid={elem.id} />
          )     
      })}
    </ul>
      )
    }
  }

  render() {
    return (
      <div className="mainpage">
        <form className="searchform" onSubmit={this.handleSearchButton}>
          <input type = "text" 
                  value = {this.state.inputgamesearch}
                  onChange = {this.handleGameSearchChange}
                  placeholder = "Enter Game Name" /><br/><br/>
          <input type="submit" value ="search game" />
        </form> 
        {this.searchedRender()}
      </div>
    );
  }
}

export default App;
