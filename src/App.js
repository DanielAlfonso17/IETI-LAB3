import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import ResponsiveDrawer from './components/Drawer';
import OutlinedCard from './components/Card'


const LoginView = () => (
  <Login />
);

const cardList = [

  	{"description" : "actividad 1" ,
  	"responsable" : {
  		"nombre" : "Santiago Carrillo" ,
  		"email" : "sancarbar@gmail"
  	} ,
  	"status" : "ready" ,
  	"dueDate" : 156464645646},
    {"description" : "actividad 2" ,
  	"responsable" : {
  		"nombre" : "Daniel Alfonso" ,
  		"email" : "danielalfonso.29@hotmail.com"
  	} ,
  	"status" : "ready" ,
  	"dueDate" : 1211564},
    {"description" : "actividad 3" ,
  	"responsable" : {
  		"nombre" : "Felipe Bueno" ,
  		"email" : "danielalfonso.29@hotmail.com"
  	} ,
  	"status" : "Stop" ,
  	"dueDate" : 1211564}


]


class App extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      isLogginIn: false

    }
  }

  componentWillMount(){
    this.setState({
        isLogginIn: localStorage.getItem("isLogginIn")
    })
  }

  render(){

  return (
      <div className="App">
      <Router>
          <div className="App">
              {this.state.isLogginIn && (<ResponsiveDrawer />)}
              <br/>
              <br/>
              {this.state.isLogginIn && (<OutlinedCard item={cardList}/>)}
              <ul>
                  {!this.state.isLogginIn && (<li><Link to="/login">Login</Link></li>)}
              </ul>

              <div>
                  {!this.state.isLogginIn && (<Route exact path="/login" component={LoginView}/>)}

              </div>
          </div>
      </Router>
      </div>
    );
  }
}

export default App;
