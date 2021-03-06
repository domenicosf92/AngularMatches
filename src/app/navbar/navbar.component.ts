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
  public fifaCodeText: string;
  @Input() teams: Array<Team>;
  @Output() selectedTeam: EventEmitter<Team> = new EventEmitter();
  @Output() underMatches: EventEmitter<Match> = new EventEmitter();
  @Output() overMatches: EventEmitter<Match> = new EventEmitter();
  @Output() allTeams: EventEmitter<Team> = new EventEmitter();
  @Output() searchedTeam: EventEmitter<string> = new EventEmitter();

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

  searchTeam(fifaCode: NgForm) {
    this.fifaCodeText = fifaCode.value;
    this.searchedTeam.emit(this.fifaCodeText);
  }

  constructor() { }

  ngOnInit() {
  }

}
