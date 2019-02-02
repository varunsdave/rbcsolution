import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UiCurrencyModel, CurrencyResponse } from '../models/current.models';

@Injectable()
export class RestClientService {
    serverUrl = 'http://localhost:8040/'; // this would typically come from a config that is passed in. For demo purpose it's been hardcoded.
    constructor(private http: HttpClient) {
    }

    public getConvertedCurrency(currencyInput: UiCurrencyModel): Observable<CurrencyResponse> {
        return this.http.post<CurrencyResponse>(this.serverUrl + 'currencyConversion/currencyCode/' +  currencyInput.currencyType, currencyInput)
    }
}