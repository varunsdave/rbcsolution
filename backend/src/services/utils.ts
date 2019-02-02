import { CurrenciesDbServices } from "./currenciesDb.service";

export function twoDigitRandomGenerator() {
    return Math.floor(Math.random() * (10 - 100) + 100) / 100;
}

export function setUpFakeCurrencies() {
    const currencyDb = CurrenciesDbServices.getInstance();
    // set up default currencies
currencyDb.addCurrency({
    baseConversionRate: 2,
    label: 'CAD',
    code: 'cad',
    lastUpdated: new Date(),
    markup: 0
});

currencyDb.addCurrency({
    baseConversionRate: 2,
    code: 'gbr',
    label: 'GBR',
    lastUpdated: new Date(),
    markup: 0
});

currencyDb.addCurrency({
    baseConversionRate: 2,
    code: 'usd',
    label: 'USD',
    lastUpdated: new Date(),
    markup: 0
});

}