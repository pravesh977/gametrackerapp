import React, { Component } from 'react';
import GamesCrudComponent from './GamesCrudComponent';
class FullGamesList extends Component {
  constructor() {
    super();
    this.state = {
      listLoaded: false,
      mydata: [],
    }
    this.renderFullList = this.renderFullList.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.fetchAllGames = this.fetchAllGames.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchAllGames();
  }

  fetchAllGames() {
    fetch('/games')
      .then((response)=> {
        response.json()
        .then((jsonResp)=>{
      //console.log(mydata, 'my database stuff');
          this.setState({
            listLoaded: true,
            mydata: jsonResp,
      })
     })
    })
  }


  handleEditSubmit(event, id) {
    
    event.preventDefault();
    console.log("define this please", id)
    fetch(`/games/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        status_id: event.target.status_id.value,
      })
    }).catch(err => console.log(err));
  }

  // handleDelete(id) {
  // fetch(`/games/${id}`,{
  //   method: 'DELETE',
  // }).then(res=>{
  //   res.json()
  //   .then((jsonResp)=>{
  //     console.log('deleted')
  //       this.setState({
  //         mydata: jsonResp,
  //       })     
  //   }).catch(err => console.log(err));
  // })
  // }

  
      
   
  
 

  handleDelete(id) {
    fetch(`/games/${id}`, {
      method: 'DELETE',
        }).then((response)=>{
          if (response.status===200) {
           this.fetchAllGames();
      }
    })
  }
  

  renderFullList() {
    if(this.state.listLoaded) {
      return (
      // console.log(this.state.mydata.gamedata[0].gamename)
      <ul  className="mycrudlist">{this.state.mydata.gamedata.map((elem)=>{
          return (
            <GamesCrudComponent 
                      gamename={elem.gamename}
                      summary={elem.summary}
                      rating={elem.rating}
                      imageurl={elem.imageurl}
                      status_id={elem.status_id}
                      key={elem.id}
                      handleDelete={this.handleDelete}
                      id={elem.id}
                      wholestuff={elem}
                      listLoaded={this.state.listLoaded}
                      handleEditSubmit={this.handleEditSubmit}
            />
          )
        })
      }
        </ul>
      )
    }
  }


  render() {
    return (
      <div>
        {this.renderFullList()}
      </div>
    )
  }
}
export default FullGamesList;