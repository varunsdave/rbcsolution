import {RegisterRoutes} from './routes';
import * as express from 'express';
import * as helmet from 'helmet';
import * as bodyParser  from 'body-parser';
import {Express, NextFunction, Request, Response} from 'express';
import * as PATH from 'path';
import * as process from 'process';
import * as socketio from "socket.io";
import * as cors from 'cors';

import './controllers/currencyConverter.controller';
import { CurrenciesDbServices } from './services/currenciesDb.service';
import { twoDigitRandomGenerator, setUpFakeCurrencies } from './services/utils';
import { CurrencyConverterService } from './services/currencyConverter.service';

const app = express();
app.use(cors())
const options:cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token", "Access-Control-Allow-Origin"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: '*',
    preflightContinue: false
  };
  
app.use(helmet());

app.use(bodyParser.json({limit: '500mb'})); //limit incoming request size
app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));

RegisterRoutes(app);

const currencyDb = CurrenciesDbServices.getInstance(); 
setUpFakeCurrencies();

if (process.env.NODE_ENV !== 'production') {
    // non production stuff
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; // works for self signed certificates
    let http = require('http').Server(app);
    const io = require('socket.io')(http, { origins: '*:*'});

    
    http.listen('8040', () => {
        console.log('server has started');  
    });
    io.on('connection', socket => {
        let previousId;
        
        console.log('a user has connected on socket');

        setInterval(() => {
            currencyDb.setMarkup(twoDigitRandomGenerator());
            socket.emit('conversionRates', currencyDb.getAllCurrencies());
        }, 100);

        socket.on('getConvertedCurrency', inputCurrency => {
            const convertedValue = new CurrencyConverterService().getConvertedValue(inputCurrency);
            socket.emit('currencyResponse', {
                responseTime: new Date(),
                convertedValue: convertedValue,
                originalValue: inputCurrency,
            });
            
        })
    })    
} else {
    // production environment specific stuff
}


