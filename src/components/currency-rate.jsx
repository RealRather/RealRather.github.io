import React, {PureComponent} from 'react';
import {Container, Header, TitleContainer, Title, TextRow, Text} from './styled-components/styled-currency.js';
import {CurrencyToConvert} from '../utils/constants.js';
import {sortDate, getDiff, transformDateFormat} from '../utils/funcs.js';

class CurrencyRate extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const {base, rates = null, start_at: startDate} = this.props;
        const currencyRates = this._transformCurrencyRates(rates);

        return (
            <Container>
                <Header>{base} / {CurrencyToConvert.RUB}</Header>
                <TitleContainer>
                    <Title>Дата</Title>
                    <Title>Курс</Title>
                    <Title>Изменение</Title>
                </TitleContainer>
                {currencyRates && currencyRates.length > 0
                        ? currencyRates.map(({date, value}, rateIndex) => {

                            const lastValue = rateIndex < currencyRates.length - 1 ? currencyRates[rateIndex + 1].value : 0;
                            const changeRate = getDiff(lastValue, currencyRates[rateIndex].value);
                            const isRedColor = Math.sign(Number(changeRate)) === -1 ? 1 : 0;

                        if ((rateIndex === currencyRates.length - 1) || startDate === date) {
                            return;
                        }

                        return <TextRow key={`${date}-${rateIndex}`}>
                                <Text>{date}</Text>
                                <Text>{value}</Text>
                                <Text isRedColor={isRedColor}>
                                    {Number(changeRate) ? Math.abs(changeRate).toFixed(3) : 0}
                                </Text>
                            </TextRow>
                        })
                        : ``}
            </Container>
        )
    }

    _transformCurrencyRates(rates) {
        if (!rates) {
            return;
        }

        const currencyRates = sortDate(Object.keys(rates));

        return currencyRates
            .map((key) => {
                return ({
                    date: transformDateFormat(key),
                    value: rates[key][CurrencyToConvert.RUB].toFixed(3)
                })
            });
    }
}

export default CurrencyRate;
