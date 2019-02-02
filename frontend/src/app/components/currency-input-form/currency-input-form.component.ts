import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { CurrencyResponse, UiCurrencyModel } from 'src/app/shared/models/current.models';


@Component({
  selector: 'app-currency-input-form',
  templateUrl: './currency-input-form.component.html',
  styleUrls: ['./currency-input-form.component.scss']
})
export class CurrencyInputFormComponent implements OnInit {

  currencyForm: FormGroup;
  convertedValue: Observable<CurrencyResponse>;

  @Output()
  formValues: EventEmitter<UiCurrencyModel> = new EventEmitter<UiCurrencyModel>();
  
  constructor() { }

  ngOnInit() {
    this.currencyForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      value: new FormControl(),
      currency: new FormControl()
    })
  }

  clearValue() {
    this.currencyForm.reset();
  }

  onSubmit() {
    const inputValue = {
      value: this.currencyForm.value.value,
      currencyType: this.currencyForm.value.currency
    }
    this.formValues.emit(inputValue);
  }
}
