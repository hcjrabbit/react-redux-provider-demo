/**
 * Created by hcj on 24/01/2018.
 */
import * as Redux from 'redux';

import counter from './counter';


const rootReducer = Redux.combineReducers({
    counter
});


export default rootReducer;