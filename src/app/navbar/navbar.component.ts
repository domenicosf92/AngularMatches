import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Team } from '../Modules/teamInterface';
import { NgForm } from '@angular/forms';
import { Match } from '../Modules/matchInterface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public fifaCode: string;
  @Input() teams: Array<Team>;
  @Output() selectedTeam: EventEmitter<Team> = new EventEmitter();
  @Output() underMatches: EventEmitter<Match> = new EventEmitter();
  @Output() overMatches: EventEmitter<Match> = new EventEmitter();
  @Output() allTeams: EventEmitter<Team> = new EventEmitter();
  @Output() searchCode: EventEmitter<string> = new EventEmitter();

  onSelect(team: Team) {
    this.selectedTeam.emit(team);
  }

  onSelectAllTeams() {
    this.allTeams.emit();
  }

  selectUnderMatches(match: Match) {
    this.underMatches.emit(match);
  }

  selectOverMatches(match: Match) {
    this.overMatches.emit(match);
  }

  searchTeam() {
    this.searchCode.emit(this.fifaCode);
  }

  constructor() { }

  ngOnInit() {
  }

}
