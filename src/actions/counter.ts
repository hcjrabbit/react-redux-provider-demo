/**
 * Created by hcj on 24/01/2018.
 */

let actions = {
    decrement : () => {
        return {
            type : 'DECREMENT_COUNTER'
        }
    },
    increment : () => {
        return {
            type : 'INCREMENT_COUNTER'
        }
    }
};

export default actions ;