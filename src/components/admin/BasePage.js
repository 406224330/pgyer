import React,{Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import axios from 'axios';
import config  from '../../config';


export default class BasePageComponent extends Component{
    constructor(props){
        super(props);


        if(config.excludeBase.indexOf(window.location.pathname) > -1){
            return;
        }

        var _self=this;
        axios.post('/api/user/read').then(function(c){
            if(c.data=='0'){
                alert('测试 长时间未活动请重新登录！')
                window.parent.location.href='/login';
                return;
            }
        }).catch(function(error){
            console.log(error);
        })



        
    }
}