import { Currency } from "../models/currency.models";
import { SignatureHelpItemsOptions } from "typescript";
import { twoDigitRandomGenerator } from "./utils";

/**
 * This is in memory, you can replace with database connector to fetch from db id needed
 */
export class CurrenciesDbServices {
    private currencies: {
        [id: string]: Currency
    };

    private markup: number;

    private static instance: CurrenciesDbServices;
    private constructor() {
        this.currencies = {};
    }

    static getInstance() {
        if (!CurrenciesDbServices.instance) {
            CurrenciesDbServices.instance = new CurrenciesDbServices();
        }
        return CurrenciesDbServices.instance;
    }

    addCurrency(currency: Currency) {
        if (!this.currencies[currency.code]) {
            this.currencies[currency.code] = currency;
        }
    }

    getCurrency(currencyCode: string) {
        return this.currencies[currencyCode];
    }

    updateCurrencyRate(currencyCode: string, rate: number) {
       const c: Currency = this.getCurrency(currencyCode);
       if (c) { c.baseConversionRate = rate};
    }

    deleteCurrency(currencyCode) {
        delete this.currencies[currencyCode];
    }

    getAllCurrencies() {
        const currencies: Currency[] = [];
        Object.keys(this.currencies).forEach( c => {
            currencies.push(this.currencies[c]);
        });
        return currencies;
    }

    setMarkup(number) {
        this.markup = number;
        Object.keys(this.currencies).forEach(c => {
            this.currencies[c].markup = number;
        })
    }

    getMarkup(): number {
        return this.markup;
    }
}