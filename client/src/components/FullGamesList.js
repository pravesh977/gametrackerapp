import React, { Component } from 'react';
import GamesCrudComponent from './GamesCrudComponent';
class FullGamesList extends Component {
  constructor() {
    super();
    this.state = {
      listLoaded: false,
      mydata: [],
      status_id: "",
      isBeingEdited: false,
    }
    this.renderFullList = this.renderFullList.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.fetchAllGames = this.fetchAllGames.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleStatusEditChange = this.handleStatusEditChange.bind(this);
    this.editClicked = this.editClicked.bind(this);
    this.renderChooser = this.renderChooser.bind(this);
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

  handleStatusEditChange(event) {
    this.setState({status_value: event.target.value})
  }

  handleEditSubmit(event, id) {
    event.preventDefault();
    fetch(`/games/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        status_id: this.state.status_id,
      })
    })
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
  renderEditForm() {
    return(
      <div>
      {console.log(this.state.mydata.gamedata[0].gamename)}
        <form onSubmit={(event)=>{
          this.handleEditSubmit(event)
          this.setState({isBeingEdited: false})
        }}> 
            <select name="status_id" onChange={this.handleStatusEditChange}>
              <option disabled>Select Status</option>
              <option value="1">Plan To Buy</option>
              <option value="2">Playing</option>
              <option value="3">Completed</option>
              <option value="4">Dropped</option>
            </select>
              <input type="submit" value="Editor"/>
        </form>
      </div>
    )
  }

  editClicked() {
    this.setState({
      isBeingEdited: true,
    })
  }

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
                      isBeingEdited={this.state.isBeingEdited}
                      editClicked={this.editClicked}
            />
          )
        })
      }
        </ul>
      )
    }
  }

  renderChooser() {
    if (this.state.isBeingEdited===false) {
      return this.renderFullList();
    }
    else {
      return this.renderEditForm();
    }
  }

  render() {
    return (
      <div>
        {this.renderChooser()}
      </div>
    )
  }
}
export default FullGamesList;