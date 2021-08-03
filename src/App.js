import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    me :{
   fullName : 'aymen haji' ,
   bio : 'web devlopper from tunisa learn in go my code' ,
   profsion : 'web devlopper ', 
   img : 'https://cdn.shopify.com/s/files/1/1190/4748/products/HA-STICKERmock_large.png?v=1616365018',
  },

  show: true,
  count: 0,
};
handel =()=> this.setState({ show: !this.state.show });
handelc =()=> this.setState({ count: this.state.count +1 });

componentDidMount(){
  setInterval(() => {
    this.handelc();
  }, 1000);
}

  render() {

    return (
        

      <div className="App">
      <button onClick={this.handel.show}>
        {this.state.show ? 'hide' : 'show'}{' '}
      </button>
      {this.state.show ? (
        <div>
          <p>{this.state.count}</p>
        <h1>{this.state.me.fullName}</h1>
        <h2>{this.state.me.bio}</h2>
        <h3>{this.state.me.profsion}</h3>
        <h4>{this.state.me.img}</h4>
        </div>
        ) : null}
      </div>
    )
  }
}



