import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators'
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-current-rate-viewer',
  templateUrl: './current-rate-viewer.component.html',
  styleUrls: ['./current-rate-viewer.component.scss']
})
export class CurrentRateViewerComponent implements OnInit {

  @Input() 
  dataSources;

  currencies;
  displayedColumns: string[] = ['name', 'code', 'baseRate', 'markup'];

  constructor() { }

  ngOnInit() {
    this.currencies = new MatTableDataSource(this.dataSources);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.dataSources.firstChange) {
      this.currencies = new MatTableDataSource(changes.dataSources.currentValue);
    }
  }
}
