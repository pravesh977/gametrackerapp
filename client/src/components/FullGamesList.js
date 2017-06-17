import React, { Component } from 'react';
import GamesCrudComponent from './GamesCrudComponent';
class FullGamesList extends Component {
  constructor() {
    super();
    this.state = {
      listLoaded: false,
      myGamesList: [],
    }
    this.renderFullList = this.renderFullList.bind(this);
  }
componentDidMount() {
  fetch('/games')
  .then((response)=> {
      response.json()
      .then((mydata)=>{
      //console.log(mydata, 'my database stuff');
      this.setState({
        listLoaded: true,
        myGamesList: mydata,
      })
     })
    })
  }

  renderFullList() {
    if(this.state.listLoaded) {
      return (
      // console.log(this.state.myGamesList.gamedata[0].gamename)
      <ul  className="mycrudlist">{this.state.myGamesList.gamedata.map((elem)=>{
          return (
            <GamesCrudComponent 
                      gamename={elem.gamename}
                      summary={elem.summary}
                      rating={elem.rating}
                      imageurl={elem.imageurl}
                      status_id={elem.status_id}
                      key={elem.id}
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