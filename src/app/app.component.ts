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
  public title = 'matchList';
  public underMatch: Array<Match>;
  public overMatch: Array<Match>;

  async onTeamSelected(team: Team) {
    this.matchList = await this.matchService.getMatchesByFifaCode(team.fifa_code);
  }

  async onAllTeamSelected() {
   this.matchList = await this.matchService.getMatches();
  }

  onUnderSelected() {
    for (const element of this.matchList) {
      if ((element.home_team.goals + element.away_team.goals) < 2) {
        this.underMatch.push(element);
      }
    }
  }

  onOverSelected() {
    for (const element of this.matchList) {
      if ((element.home_team.goals + element.away_team.goals) > 2) {
        this.overMatch.push(element);
      }
    }
  }

  async teamSearched(fifaCode: NgForm) {
    for (const team of this.teamList) {
      if (team.fifa_code !== fifaCode.value) {
        return false;
      }
    }
    this.matchList = await this.matchService.getMatchesByFifaCode(fifaCode.value);
  }

  async ngOnInit() {
    [this.matchList, this.teamList] = await Promise.all([
      this.matchService.getMatches(),
      this.teamService.getTeams()
    ]);
  }
}
