export interface UiCurrencyModel {
    value: number;
    currencyType: 'cad' | 'usd' | 'gbp';
}

export interface CurrencyResponse {
    responseTime: Date;
    convertedValue: UiCurrencyModel;
    originalValue: UiCurrencyModel;   
}