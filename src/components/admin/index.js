
import React,{Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import axios from 'axios';
import { Modal } from 'antd';

import './css/index-main.css';


import loader from './img/ajax-loader.gif';
import user2 from './img/user-logo.jpg';



import learun from './js';
import menuData from './js/menu.json';
const confirm = Modal.confirm;

export default class adminIndex extends Component {

    constructor(props){
        super(props)
    }

    componentWillMount(){
       
    }

    componentDidMount(){
        this.loadMenu();
    }

    loadMenu(){
        learun.learunindex.load();
        learun.learunindex.loadMenu(menuData);
        learun.learuntab.init();   
    }

    Logout(){
        var _self=this;

        confirm({
            title: '确定要退出系统吗?',
            content: '退出之后下次需要重新输入账号密码，请牢记账号密码。',
            onOk() {
              return new Promise((resolve, reject) => {
                
                axios.post('/api/user/logout').then(function(){
                    window.location.href='/login';
                });

              }).catch(() => console.log('Oops errors!'));
            },
            onCancel() {},
          });

     
    }

    render(){
        return (
            <div>
                <div id="ajax-loader" className="loader">
                    <img src={loader} />
                </div>
                <div className="wrapper">
                    <header className="main-header">
                        <a href="http://ccn.yesno.com.cn/" target="_blank" className="logo">
                            <span className="logo-mini">CCN</span>
                            <span className="logo-lg"><strong>蒲公英一物一码</strong></span>
                        </a>
                        <nav className="navbar navbar-static-top">
                            <a className="sidebar-toggle">
                                <span className="sr-only">Toggle navigation</span>
                            </a>
                            <div className="navbar-custom-menu">
                                <ul className="nav navbar-nav">
                                    <li className="dropdown messages-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-envelope-o "></i>
                                            <span className="label label-success"></span>
                                        </a>
                                    </li>
                                    <li className="dropdown notifications-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-bell-o"></i>
                                            <span className="label label-warning"></span>
                                        </a>
                                    </li>
                                    <li className="dropdown tasks-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-flag-o"></i>
                                            <span className="label label-danger"></span>
                                        </a>
                                    </li>
                                    <li className="dropdown user user-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <img src={user2} className="user-image" alt="User Image"/>
                                            <span className="hidden-xs">徐大腿</span>
                                        </a>
                                        <ul className="dropdown-menu pull-right">
                                            <li><a className="menuItem" data-id="userInfo" href="/SystemManage/User/Info"><i className="fa fa-user"></i>个人信息</a></li>
                                            <li><a href="javascript:;;"><i className="fa fa-trash-o"></i>清空缓存</a></li>
                                            <li><a href="javascript:;;"><i className="fa fa-paint-brush"></i>皮肤设置</a></li>
                                            <li className="divider"></li>
                                            <li><a href="javascript:;;" onClick={this.Logout.bind(this)}><i className="ace-icon fa fa-power-off"></i>安全退出</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                    <div className="main-sidebar">
                        <div className="sidebar">
                            <div className="user-panel">
                                <div className="pull-left image">
                                    <img src={user2} className="img-circle" alt="User Image"/>
                                </div>
                                <div className="pull-left info">
                                    <p>徐大腿</p>
                                    <a><i className="fa fa-circle text-success"></i>在线</a>
                                </div>
                            </div>
                            <form action="#" method="get" className="sidebar-form">
                                <div className="input-group">
                                    <input type="text" name="q" className="form-control" placeholder="Search..."/>
                                    <span className="input-group-btn">
                                        <a className="btn btn-flat"><i className="fa fa-search"></i></a>
                                    </span>
                                </div>
                            </form>
                            <ul className="sidebar-menu" id="sidebar-menu">
                                {/* <li className="header">导航菜单</li> */}
                            </ul>
                        </div>
                    </div>
                    {/* 中间内容 */}
                    <div id="content-wrapper" className="content-wrapper">
                        <div className="content-tabs">
                            <button className="roll-nav roll-left tabLeft">
                                <i className="fa fa-backward"></i>
                            </button>
                            <nav className="page-tabs menuTabs">
                                <div className="page-tabs-content" style={{marginLeft:"0px"}} >
                                    <a href="javascript:;" className="menuTab active" data-id="/main">欢迎首页</a>
                                </div>
                            </nav>
                            <button className="roll-nav roll-right tabRight">
                                <i className="fa fa-forward" style={{marginLeft: "3px"}}></i>
                            </button>
                            <div className="btn-group roll-nav roll-right">
                                <button className="dropdown tabClose" data-toggle="dropdown">
                                    页签操作<i className="fa fa-caret-down" style={{paddingLeft: "3px"}}></i>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="tabReload" href="javascript:;;">刷新当前</a></li>
                                    <li><a className="tabCloseCurrent" href="javascript:;;">关闭当前</a></li>
                                    <li><a className="tabCloseAll" href="javascript:;;">全部关闭</a></li>
                                    <li><a className="tabCloseOther" href="javascript:;;">除此之外全部关闭</a></li>
                                </ul>
                            </div>
                            <button className="roll-nav roll-right fullscreen"><i className="fa fa-arrows-alt"></i></button>
                        </div>
                        <div className="content-iframe">
                            <div className="mainContent" id="content-main">
                                <iframe className="LRADMS_iframe" width="100%" height="100%" src="/main" frameBorder="0" data-id="/main"></iframe>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}