import { Component, OnInit } from '@angular/core';
import { CurrencySocketService } from 'src/app/shared/services/currency.socket.service';
import { map, take } from 'rxjs/operators'
@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {

  currencies;
  constructor(private currencySocketService: CurrencySocketService) { }

  ngOnInit() {
    this.currencies = this.currencySocketService.conversionRates.pipe(map(data => {
      // this.currencies = data; 
      return data;
    }));
  }

}
