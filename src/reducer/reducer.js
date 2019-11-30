import {getFullDate, subtractDays} from '../utils/funcs.js';
import {DAYS_COUNT, CurrencyToConvert} from '../utils/constants.js';

const initialState = {
  currencies: []
};

const ActionType = {
    LOAD_CURRENCY_RATES: `LOAD_CURRENCY_RATES`
};

const ActionCreator = {
    loadCurrencyRates: (rates) => {
        return {
            type: ActionType.LOAD_CURRENCY_RATES,
            payload: rates
        };
    }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case ActionType.LOAD_CURRENCY_RATES:
          return Object.assign({}, state, {
             currencies: [
                 ...state.currencies,
                 action.payload
             ]
          });
      default:
          return state;
  }
};

const Operation = {
    loadCurrencyRates: () => (dispatch, _getState, api) => {
        const startDay = subtractDays(new Date(), DAYS_COUNT);
        const endDay = getFullDate();
        let currencyRates = null;
        const currencies = api[1];

        currencies.forEach(currency => {
            currencyRates = api[0].get(`/history`, {
                params: {
                    start_at: startDay,
                    end_at: endDay,
                    symbols: CurrencyToConvert.RUB,
                    base: currency
                }
            })
                .then((response) => {
                    dispatch(ActionCreator.loadCurrencyRates(response.data));
                });
        });

        return currencyRates;
    }
};

export {
    ActionType,
    ActionCreator,
    reducer,
    Operation
}
