import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import { observable,action } from 'mobx';
import { observer } from 'mobx-react';

import {Table,Divider,Icon,Button,Form, Row, Col, Input,DatePicker,Select,notification,Radio,Popconfirm,Spin     } from 'antd';
import reqwest from 'reqwest';


const FormItem = Form.Item;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => (
    {
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    value: record.cell,
  }),
};


const appState = observable({
  count: 50,
});


appState.increment = action(function() {
  this.count ++;
  console.log(appState.count)
})
appState.decrement = action(function() {
  this.count --;
  console.log(appState.count)
})

@observer
class App extends Component {

  load(){
    axios.get('/api/user/cc').then(function(c){
      alert("调取接口success"+c.data);
    }).catch(function(error){
      console.log(error);

    })
  }

  constructor(props){
    super(props);
    this.columns = [{
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: name => `${name.first} ${name.last}`,
      width: '20%'
    }, {
      title: 'Gender',
      dataIndex: 'gender',
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
      width: '20%',
    }, {
      title: 'Email',
      dataIndex: 'email',
    } ,{
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text, record) => {
        return (
            this.state.data.length > 1
            ? (
              <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.cell)}>
                <a href="javascript:;">Delete</a>
              </Popconfirm>
            ) : null
        )}
    }]

  }


state = {
  data: [],
  pagination: {},
  loading: false,
};

onDelete = (key) => {
  const dataSource = [...this.state.data];
  this.setState({ data: dataSource.filter(item => item.key !== key) });
}




handleTableChange = (pagination, filters, sorter) => {
  const pager = { ...this.state.pagination };
  pager.current = pagination.current;
  this.setState({
    pagination: pager,
  });
  this.fetch({
    results: pagination.pageSize,
    page: pagination.current,
    sortField: sorter.field,
    sortOrder: sorter.order,
    ...filters,
  });
}

fetch = (params = {}) => {
  console.log('params:', params);
  this.setState({ loading: true });
  reqwest({
    url: 'https://randomuser.me/api',
    method: 'get',
    data: {
      results: 10,
      ...params,
    },
    type: 'json',
  }).then((data) => {
    const pagination = { ...this.state.pagination };
    // Read total count from server
    // pagination.total = data.totalCount;
    pagination.total = 200;
    this.setState({
      loading: false,
      data: data.results,
      pagination,
    });
  });
}

  componentDidMount(){
    this.fetch();
    setTimeout(this.load,1000)

  }

  check = () => {
    this.props.form.validateFields(
      (err) => {
        if (!err) {
          this.openNotification();

          this.fetch({gender:"male"})
          console.info('success');
        }
      },
    );
  }



  onChange=(date, dateString)=> {
    console.log(date, dateString);
  }


  handleChange(value) {
    console.log(`selected ${value}`);
  }
  
  handleBlur() {
    console.log('blur');
  }
  
  handleFocus() {
    console.log('focus');
  }

  openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

  handleInc() {
    appState.increment();
  }
  handleDec() {
    appState.decrement();
  }



  render() {
    const { getFieldDecorator } = this.props.form;
    const columns=this.columns;
    return (
      <div className="App">
        <div className="expa">
          <Spin/>
        </div>
  
         <Form layout="inline" style={{marginBottom:"20px"}}>
            <FormItem label="Name">
              {getFieldDecorator('Name', {
              rules: [{
                required: true,
                message: 'Please input your Name',
              }],
              })(
                <Input placeholder="input placeholder" />
              )}
            </FormItem>
              <FormItem label="Email">
              {
                getFieldDecorator('Email',{
                  rules: [{
                    message: 'Please input your Email',
                    pattern:/^\d$/
                  }]
                })
                (<Input placeholder="input placeholder" />)
                }
                
            </FormItem>

            <FormItem label="区间">
              <RangePicker locale={{lang:{rangePlaceholder:["Start 111","End 222"]}}} onChange={this.onChange.bind(this)} />
            </FormItem>

              <FormItem label="维度">
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Select a person"
                  optionFilterProp="children"
                  onChange={this.handleChange.bind(this)}
                  onFocus={this.handleFocus.bind(this)}
                  onBlur={this.handleBlur.bind(this)}
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                <Option value="jack">Jack</Option>
                <Option value="lucy" disabled>Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>
            </FormItem>

            <FormItem label="单选城市">
                <RadioGroup onChange={this.onChange.bind(this)} defaultValue="a">
                  <RadioButton value="a">Hangzhou</RadioButton>
                  <RadioButton value="b">Shanghai</RadioButton>
                  <RadioButton value="c">Beijing</RadioButton>
                  <RadioButton value="d">Chengdu</RadioButton>
                </RadioGroup>
            </FormItem>

            <FormItem>
              <Button type="primary" onClick={this.check}>
              Submit 
              </Button>
            </FormItem>

         </Form>
        
      
            <div>
              Counter: { appState.count } <br />
              <button onClick={this.handleInc.bind(this)}>点击 + 加</button>
              <button onClick={this.handleDec.bind(this)}>点击 - 减</button>
            </div>

        <Table
          columns={columns}
          rowKey={record => record.login.uuid}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
          size="small" 
          bordered
          title={() => 'Header'}
          footer={() => 'Footer'}
          expandedRowRender={record => <p style={{ margin: 0 }}>{record.phone}</p>}
          scroll={{ y: 240 }} 
          rowSelection={rowSelection}
      />
      </div>
    );
  }

  
}
const WrappedDynamicRule = Form.create()(App);

export default WrappedDynamicRule;
