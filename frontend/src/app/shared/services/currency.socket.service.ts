import { Injectable } from "@angular/core";
import { Socket } from 'ngx-socket-io';
import { CurrencyResponse, UiCurrencyModel } from '../models/current.models';

@Injectable({
    providedIn: 'root'
  })
export class CurrencySocketService {
    currentCurrencyResponse = this.socket.fromEvent<CurrencyResponse>('currencyResponse');
    currencyResponse = this.socket.fromEvent<string[]>('currencyResponses');
    conversionRates = this.socket.fromEvent<any[]>('conversionRates');
    constructor(private socket: Socket) {}

    getCurrencyResponse(inputCurrency: UiCurrencyModel) {
        this.socket.emit('getConvertedCurrency', inputCurrency);
    }


}