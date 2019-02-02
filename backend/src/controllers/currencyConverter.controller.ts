import {Controller, Post, Request, Response, Route, Security} from 'tsoa';
import * as express from 'express';
import { CurrencyConversionResponse, UiCurrencyModel } from '../models/currency.models';
import { CurrencyConverterService } from '../services/currencyConverter.service';
@Route('currencyConversion')
export class CurrencyConversionController extends Controller {
    @Post('currencyCode/{code}')
    public async convertCurrency(@Request() req: express.Request, code: string): Promise<CurrencyConversionResponse>{
        // typically a middleware can check things like requested body matches resource or other middleware.
        // all of that has been ignored in this.

        const conversionRequest: UiCurrencyModel = req.body;
        console.log('got request for currency ' + JSON.stringify(conversionRequest));
        return {
            responseTime: new Date(),
            convertedValue: new CurrencyConverterService().getConvertedValue(conversionRequest),
            originalValue: req.body,
        };
    }
}