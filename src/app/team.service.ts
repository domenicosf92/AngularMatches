import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from './Modules/teamInterface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  apiURL = 'https://worldcup.sfg.io/teams';

  public getTeams() {
    return this.httpClient.get<Team[]>(`${this.apiURL} `).toPromise();
  }

  constructor(private httpClient: HttpClient) { }
}
