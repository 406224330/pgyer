## 在项目中加入mobX

- 导入模块包

``` js
import {observer, Provider, inject, action } from 'mobx-react';
```

- 声明你的状态存储库store

``` js

import { observable, action } from 'mobx';

class LoginStore {
    @observable username;
    @observable password;

    constructor() {
        this.username = '';
        this.password = '';
    }

    @action changeUsername = (value) => {
        this.username = value;
    }
    @action changePassword = (value) => {
        this.password = value;
    }
}

const loginStore = new LoginStore();

export default loginStore;
export { LoginStore };

```
> 注意，这里的store对象是使用的时候必要被实例化


- 使用Provider来导入状态器并让整个项目全局使用

``` js

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


```


- 在需要获取状态值的地方加入@inject('loginStore')   @observer 标识


``` js

@inject(['loginStore'])  
@observer
class login extends Component {

}

```

- 使用props中取出状态机

``` js

this.props.loginStore.xxxx

```