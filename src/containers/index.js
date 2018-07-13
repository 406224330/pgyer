import React, {Component} from 'react'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import { Provider } from 'mobx-react';

import App from '../App'
import NotFound from '../components/404'
import Login from '../components/login'
import reg from '../components/register'
import adminmain from '../components/admin'
import mainindex from '../components/admin/main.js'
import BasePage from '../components/admin/BasePage';
import * as stores from '../stores';



export default class Container extends BasePage{
    render(){
        
        return(
            <Provider {...stores}>
                <Router>
                        <Switch>
                            <Route path="/login" component={Login}/>
                            <Route path="/reg" component={reg}/>
                            <Route path="/404" component={NotFound}/>
                            <Route path="/main" component={mainindex}/>
                            <Route path="/react" component={App}/>
                            <Route component={adminmain}/>
                        </Switch>
                </Router>


            </Provider>
        )
    
    }
}


