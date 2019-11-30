import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import CurrencyRate from './currency-rate.jsx';
import {ContainerWrapper} from './styled-components/styled-currency.js';

class CurrencyList extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const {currencies} = this.props;

        return (
            <ContainerWrapper>
                {currencies
                    .map((currencyRate, index) =>
                        <CurrencyRate
                            key={`currency-${index}`}
                            {...currencyRate}
                        />
                    )}
            </ContainerWrapper>
        )
    }
}

const mapStateToProps = (state, ownProps) => Object.assign({},
    ownProps, {
        currencies: state.currencies
    });

export {CurrencyList}
export default connect(mapStateToProps)(CurrencyList);
