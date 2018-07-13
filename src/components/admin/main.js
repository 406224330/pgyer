
import React,{Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


export default class mainindex extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    render(){
        return (
            <div id="areascontent">
                <div className="rows" style={{marginBottom: "0.8%", overflow: "hidden"}}>
                    <div style={{float: "left",width: "69.2%"}}>
                        <div style={{height: "100%", border: "1px solid #e6e6e6", overflow: "hidden"}}>
                            <div className="dashboard-stats">
                                <div className="dashboard-stats-item" style={{backgroundColor: "#578ebe"}}>
                                    <div className="stat-icon">
                                        <i className="fa fa-clock-o"></i>
                                    </div>
                                    <h2 className="m-top-none">17<span>个</span></h2>
                                    <h5>待办未处理</h5>
                                </div>
                            </div>
                            <div className="dashboard-stats">
                                <div className="dashboard-stats-item" style={{backgroundColor: "#e35b5a"}}>
                                    <h2 className="m-top-none">12<span>条</span></h2>
                                    <h5>预警信息未读</h5>
                                    <div className="stat-icon">
                                        <i className="fa fa-bell"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-stats">
                                <div className="dashboard-stats-item" style={{backgroundColor: "#44b6ae"}}>
                                    <h2 className="m-top-none">20<span>封</span></h2>
                                    <h5>邮件未读</h5>
                                    <div className="stat-icon">
                                        <i className="fa fa-envelope-o"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-stats">
                                <div className="dashboard-stats-item" style={{backgroundColor: "#8775a7", marginRight: "0px"}}>
                                    <h2 className="m-top-none">6</h2>
                                    <h5>对公待签收任务</h5>
                                    <div className="stat-icon">
                                        <i className="fa fa-gavel"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-stats">
                                <div className="dashboard-stats-item" style={{backgroundColor: "#4f5c65", marginBottom: "0px"}}>
                                    <h2 className="m-top-none">324<span>件</span></h2>
                                    <h5>今日订单数</h5>
                                    <div className="stat-icon">
                                        <i className="fa fa-shopping-cart"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-stats">
                                <div className="dashboard-stats-item" style={{backgroundColor: "#14aae4", marginBottom: "0px"}}>
                                    <h2 className="m-top-none">525<span>件</span></h2>
                                    <h5>昨日订单数</h5>
                                    <div className="stat-icon">
                                        <i className="fa fa-file-text-o"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-stats">
                                <div className="dashboard-stats-item" style={{backgroundColor: "#949FB1", marginBottom: "0px"}}>
                                    <h2 className="m-top-none">355<span>件</span></h2>
                                    <h5>回退订单数</h5>
                                    <div className="stat-icon">
                                        <i className="fa fa-coffee"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-stats">
                                <div className="dashboard-stats-item" style={{backgroundColor: "#f29503", marginRight: "0px", marginBottom: "0px"}}>
                                    <h2 className="m-top-none">3335<span>元</span></h2>
                                    <h5>昨日成交金额</h5>
                                    <div className="stat-icon">
                                        <i className="fa fa-rmb" style={{paddingLeft: "10px"}}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{float: "right", width: "30%"}}>
                        <div style={{height: "221px", border: "1px solid #e6e6e6", backgroundColor: "#fff"}}>
                            <div className="panel panel-default">
                                <div className="panel-heading"><i className="fa fa-area-chart fa-lg" style={{paddingRight: "5px"}}></i>成交订单</div>
                                <div className="panel-body">
                                    <canvas id="Canvas2" style={{height: "165px", width: "554px"}} width="554" height="165"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rows" style={{overflow: "hidden"}}>
                    <div style={{float: "left", width: "33.8%", marginRight: "0.8%"}}>
                        <div style={{height: "240px", border: "1px solid #e6e6e6", backgroundColor: "#fff"}}>
                            <div className="panel panel-default">
                                <div className="panel-heading"><i className="fa fa-send fa-lg" style={{paddingRight: "5px"}}></i>企业文化</div>
                                <div className="panel-body">
                                    <ul>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">创新企业党建思想政治工作</a><span className="time">2016-07-02</span></li>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">现代国有企业道德体系初构</a><span className="time">2016-06-18</span></li>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">国有企业文化问题根源及文化重塑任务分析</a><span className="time">2016-06-26</span></li>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">国有企业文化建设必须突出员工文化</a><span className="time">2016-04-20</span></li>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">加强企业公民建设 推进企业和谐发展</a><span className="time">2016-03-08</span></li>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">不断提升大庆精神 实现企业持续发展</a><span className="time">2016-02-22</span></li>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">科学发展作指导 人水和谐路更宽</a><span className="time">2016-02-15</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{float: "left", width: "34.6%", marginRight: "0.8%"}}>
                        <div style={{height: "240px", border: "1px solid #e6e6e6", backgroundColor: "#fff"}}>
                            <div className="panel panel-default">
                                <div className="panel-heading"><i className="fa fa-rss fa-lg" style={{paddingRight: "5px"}}></i>通知公告</div>
                                <div className="panel-body">
                                    <ul>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">【通知】新版员工守则，即日执行</a><span className="time">2016-07-21</span></li>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">【公告】OA办公使用指南</a><span className="time">2016-07-21</span></li>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">【公告】劳动节集体出游指南</a><span className="time">2016-07-21</span></li>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">【通知】2016年G20财长和央行行</a><span className="time">2016-07-21</span></li>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">【通知】2016年G20财长和央行行</a><span className="time">2016-07-21</span></li>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">【通知】品牌价值的最佳选择</a><span className="time">2016-07-21</span></li>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">【公告】采购商城全新升级自营业正品</a><span className="time">2016-07-21</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{float: "right", width: "30%"}}>
                        <div style={{height: "240px", border: "1px solid #e6e6e6", backgroundColor: "#fff"}}>
                            <div className="panel panel-default">
                                <div className="panel-heading"><i className="fa fa-thumbs-o-up fa-lg" style={{paddingRight: "5px"}}></i>最新签约</div>
                                <div className="panel-body">
                                    <ul>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">南京森鹿皮件服饰有限公司</a><span className="time">2016-07-21</span></li>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">曲靖市绿能燃气运输有限公司</a><span className="time">2016-07-20</span></li>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">青海航天信息有限公司</a><span className="time">2016-07-19</span></li>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">吉林省蔬菜花卉科学研究院</a><span className="time">2016-07-17</span></li>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">青海省广播电视信息网络股份有限公司</a><span className="time">2016-07-17</span></li>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">国营长空精密机械制造公司</a><span className="time">2016-07-13</span></li>
                                        <li><a href="http://www.learun.cn/adms/index.html" target="_blank">广东友元国土信息工程有限公司</a><span className="time">2016-07-12</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}