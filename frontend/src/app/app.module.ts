import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { FullLayoutComponent } from './components/full-layout/full-layout.component';
import {MatInputModule, MatSelectModule, MatFormFieldModule, MatIconModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RestClientService } from './shared/services/rest-client.service';
import { HttpClientModule } from '@angular/common/http';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyInputFormComponent } from './components/currency-input-form/currency-input-form.component';
import { CurrentRateViewerComponent } from './components/current-rate-viewer/current-rate-viewer.component';

const config: SocketIoConfig = { url: 'http://localhost:8040', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent,
    FullLayoutComponent,
    CurrencyInputFormComponent,
    CurrentRateViewerComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RestClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
