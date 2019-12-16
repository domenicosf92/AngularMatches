import { Component, OnInit } from '@angular/core';
import { Match } from './Modules/matchInterface';
import { Team } from './Modules/teamInterface';
import { MatchService } from './match.service';
import { TeamService } from './team.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public matchService: MatchService, public teamService: TeamService) {}
  public matchList: Array<Match>;
  public teamList: Array<Team>;
  public allMatches: Array<Match>; // matches copy
  public title = 'matchList';

  async onTeamSelected(team: Team) {
    this.matchList = await this.matchService.getMatchesByFifaCode(team.fifa_code);
  }

  async onAllTeamSelected() {
   this.matchList = await this.matchService.getMatches();
  }

  onUnderSelected() {
    this.matchList = this.matchList.filter((match: Match) => {
      return (match.home_team.goals + match.away_team.goals) < 2;
    });
  }

  onOverSelected() {
    this.matchList = this.matchList.filter((match: Match) => {
      return (match.home_team.goals + match.away_team.goals) > 2;
    });
  }

  async teamSearched(fifaCode: string) {
    this.matchList = await this.matchService.getMatchesByFifaCode(fifaCode);
  }

  async ngOnInit() {
    [this.matchList, this.teamList] = await Promise.all([
      this.matchService.getMatches(),
      this.teamService.getTeams()
    ]);
    this.allMatches = [...this.matchList];
  }
}
