import { observable, action } from 'mobx';
import md5 from 'md5';

class LoginStore {
    @observable username;
    @observable password;
    @observable imgcode;

    constructor() {
        this.username = '';
        this.password = '';
        this.imgcode='';
    }

    @action changeUsername = (value) => {
        this.username = value;
    }
    @action changePassword = (value) => {
        this.password = md5(value);
    }
    @action changeImgcode = (value) => {
        this.imgcode = value;
    }
}

const loginStore = new LoginStore();

export default loginStore;
export { LoginStore };