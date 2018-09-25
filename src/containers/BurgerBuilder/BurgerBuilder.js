import React, { Component } from 'react';
import Auux from '../../hoc/Auux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render () {
        return (
            <Auux>
                <Burger />
                <div>Build Controls</div>
            </Auux>
        )
    }
}

export default BurgerBuilder;