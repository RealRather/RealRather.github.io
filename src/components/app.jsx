import React, {PureComponent} from 'react';
import CurrencyList from './currency-list.jsx'

class App extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <CurrencyList/>;
    }
}

export default App;
