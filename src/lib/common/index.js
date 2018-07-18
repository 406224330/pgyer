import {notification,Modal} from 'antd';


const success=Modal.success;
class OpenNotice {

    openNotification = (o) => {
        notification.open({
        message: o.msg,
        description: o.des,
        icon: o.icon,
        });
    };

    openSuccessNotifi=(o)=>{
        success({
            title: o.title,
            content: o.content,
            onOk() {
                return new Promise(o.okFn).catch(() => console.log('Oops errors!'));
            }
        })
    }
}

const openNotice=new OpenNotice();

export default openNotice;
export { OpenNotice };