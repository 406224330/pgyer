import React,{Component} from 'react'
import NotFoundImg from './404.png'
import './style.css'
import '../../lib/animate.css'
export default class NotFound extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                <img src={NotFoundImg} alt="" className="animated lightSpeedIn"/>
            </div>
        )
    }
    
}