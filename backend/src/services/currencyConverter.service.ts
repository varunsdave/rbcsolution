import { UiCurrencyModel, Currency } from "../models/currency.models";
import { CurrenciesDbServices } from "./currenciesDb.service";
import { twoDigitRandomGenerator } from "./utils";

export class CurrencyConverterService {
    constructor() {
    }

    public getConvertedValue(inputValue: UiCurrencyModel): UiCurrencyModel {
        const currencyInstance = CurrenciesDbServices.getInstance();
        const currency: Currency = currencyInstance.getCurrency(inputValue.currencyType);
        return {
            value: inputValue.value * currency.baseConversionRate + currency.markup,
            currencyType: inputValue.currencyType
        }
    }
}