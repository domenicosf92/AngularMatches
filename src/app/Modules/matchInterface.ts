export interface Weather {
    humidity: string;
    temp_celsius: string;
    temp_farenheit: string;
    wind_speed: string;
    description: string;
}
export interface Team {
    country: string;
    code: string;
    goals: number;
    penalties: number;
}
export interface Event {
    id: number;
    type_of_event: string;
    player: string;
    time: string;
}
export interface StartingEleven {
    name: string;
    captain: boolean;
    shirt_number: number;
    position: string;
}
export interface Substitute {
    name: string;
    captain: boolean;
    shirt_number: number;
    position: string;
}
export interface Statistics {
    country: string;
    attempts_on_goal: number;
    on_target: number;
    off_target: number;
    blocked: number;
    woodwork: number;
    corners: number;
    offsides: number;
    ball_possession: number;
    pass_accuracy: number;
    num_passes: number;
    passes_completed: number;
    distance_covered: number;
    balls_recovered: number;
    tackles: number;
    clearances: number;
    yellow_cards: number;
    red_cards: number;
    fouls_committed: number;
    tactics: string;
    starting_eleven: StartingEleven[];
    substitutes: Substitute[];
}
export interface Match {
    venue: string;
    location: string;
    status: string;
    time: string;
    fifa_id: string;
    weather: Weather;
    attendance: string;
    officials: string[];
    stage_name: string;
    home_team_country: string;
    away_team_country: string;
    datetime: Date;
    winner: string;
    winner_code: string;
    home_team: Team;
    away_team: Team;
    home_team_events: Event[];
    away_team_events: Event[];
    home_team_statistics: Statistics;
    away_team_statistics: Statistics;
    last_event_update_at: Date;
    last_score_update_at?: any;
}
