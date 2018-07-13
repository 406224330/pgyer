
import React,{Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import config from '../../config';

/**
 * 
 * 设置雪花背景基础配置
 * **/
import particlesJS from '../../lib/js/particles.js';
import backJson from '../../lib/js/background.json';

export default class register extends Component {

    constructor(props){
        super(props)
    }

    
    componentDidMount(){
        particlesJS('box',backJson);
    }

    changeValidCode(e){
        this.refs.imgcode.src=this.refs.imgcode.src+'?rnd='+Math.random();
    }

    render(){
        return (
            <div>
                <div id="box"></div>
                <div className="cent-box register-box">
                <div className="cent-box-header">
                    <h1 className="main-title "></h1>
                    <h2 className="sub-title">蒲公英一物一码营销管理平台</h2>
                </div>

                <div className="cont-main clearfix">
                    <div className="index-tab">
                        <div className="index-slide-nav">
                            <Link to="/login">登录 </Link>
                            <Link to="/reg" className="active">注册 </Link>
                            <div className="slide-bar slide-bar1"></div>				
                        </div>
                    </div>

                    <div className="login form">
                        <div className="group">
                            <div className="group-ipt email">
                                <input type="email" name="email" id="email" className="ipt" placeholder="邮箱地址" required/>
                            </div>
                            <div className="group-ipt user">
                                <input type="text" name="user" id="user" className="ipt" placeholder="选择一个用户名" required/>
                            </div>
                            <div className="group-ipt password">
                                <input type="password" name="password" id="password" className="ipt" placeholder="设置登录密码" required/>
                            </div>
                            <div className="group-ipt password1">
                                <input type="password" name="password1" id="password1" className="ipt" placeholder="重复密码" required/>
                            </div>
                            <div className="group-ipt verify">
                                <input type="text" name="verify" id="verify" className="ipt" placeholder="输入验证码" required/>
                                <img src="/api/validcode/getcode" onClick={this.changeValidCode.bind(this)} ref="imgcode" alt="看不清，点击更换" className="imgcode"/>
                            </div>
                        </div>
                    </div>

                    <div className="button">
                        <button type="submit" className="login-btn register-btn" id="button">注册</button>
                    </div>
                </div>
            </div>


            <div className="footer">
                <p>CCN - Aways Makes More</p>
                <p>Designed By 徐大腿 & <a href="zrong.me">xulayen.com</a> 2018</p>
            </div>
        </div>
        )
    }
}