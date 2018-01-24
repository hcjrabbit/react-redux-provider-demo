import * as React from 'react';


let didWarnAboutReceivingStore = false;

function warnAboutReceivingStore(){
    if (didWarnAboutReceivingStore)return;
    didWarnAboutReceivingStore = true;
}


export default class Provider extends React.Component<any> {
    public store:any ;

    getChildContext(){
        return{
            store : this.store
        }
    }
    constructor(props:{store:{}}, context:any){
        super(props, context);
        this.store = props.store;
    }
    render(){
        return React.Children.only(this.props.children);
    }
}

if(process.env.NODE_ENV !== 'production'){
    Provider.prototype.componentWillReceiveProps = function(nextProps:{nextStore:{}}){
        const {store} = this;
        const {nextStore} = nextProps;

        if(store !== nextStore){
            warnAboutReceivingStore();
        }
    }
}