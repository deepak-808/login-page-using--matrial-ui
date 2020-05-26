import React from 'react';
import Login from './Components/application/login/index'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import {  Link, browserHistory, IndexRoute, Router } from 'react-router'
import {createHashHistory} from 'history';
import './App.css'

class App extends React.Component {
  constructor(props) {
     super(props);
     this.state = {

     }
    }
    render(){
      
      return(
        <div>
          <Switch>
              <Route exact path='/' component={Login}/>

          </Switch>
        </div>
      )
    }
}


export default App;
