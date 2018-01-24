import {connect} from 'react-redux';

import Counter from '../components/Counter';
import actions from '../actions/counter';


const mapStateToProps = (state:{counter:number}) => {
    return {
        counter : state.counter
    }
};

const mapDispatchToProps = (dispatch:any, ownProps:{}) => {
    return {
        increment : (...args:any[]) => dispatch(actions.increment(...args)),
        decrement : (...args:any[]) => dispatch(actions.decrement(...args))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);