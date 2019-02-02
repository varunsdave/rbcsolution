export interface CurrencyConversionResponse {
    responseTime: Date;
    convertedValue: UiCurrencyModel;
    originalValue: UiCurrencyModel;
}

export interface UiCurrencyModel {
    value: number;
    currencyType: 'cad' | 'usd' | 'gbp';
}

export interface Currency {
    lastUpdated: Date;
    baseConversionRate: number;
    markup: number;
    code: string;
    label: string;
}

