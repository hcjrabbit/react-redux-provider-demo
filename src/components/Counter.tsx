/**
 * Created by hcj on 24/01/2018.
 */
'use strict';

import * as React from 'react';


class Counter extends React.Component<any> {
    render() {
        const {increment, decrement, counter} = this.props;
        return (
            <p>
                Clicked: {counter} times
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </p>
        )
    }
}

export default Counter;