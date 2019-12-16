import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../Modules/matchInterface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() matches: Array<Match>;

  constructor() { }

  ngOnInit() {
  }

}
