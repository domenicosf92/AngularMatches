import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from './Modules/matchInterface';


@Injectable({
  providedIn: 'root'
})
export class MatchService {
  apiURL = 'https://worldcup.sfg.io/matches';

  public getMatches() {
    return this.httpClient.get<Match[]>(`${this.apiURL} `).toPromise();
  }

  public getMatchesByFifaCode(FIFA_CODE: string) {
    return this.httpClient.get<Match[]>(`${this.apiURL}/country?fifa_code=${FIFA_CODE}`).toPromise();
  }

  constructor(private httpClient: HttpClient) { }
}
