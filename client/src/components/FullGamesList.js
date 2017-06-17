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
  }

componentDidMount() {
  fetch('/games')
  .then((response)=> {
      response.json()
      .then((mydata)=>{
      //console.log(mydata, 'my database stuff');
      this.setState({
        listLoaded: true,
        mydata: mydata,
      })
     })
    })
  }


  handleDelete(id) {
  fetch(`/games/${id}`,{
    method: 'DELETE',
  }).then((res)=>{
    res.json()
    .then((jsonResp)=>{
      console.log('deleted')
    }).catch(err => console.log(err));
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