import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ability, AbilityBuilder } from '@casl/ability';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username: string;

  constructor(private ability: Ability) {}

  setUsername(username) {
    this.username = username;
    this.updateAbility(username);
    console.log('New user name: ', username);
  }

  private updateAbility(username: string) {
    const { can, rules } = new AbilityBuilder<Ability>();

    if (username === 'iCanClearMessages') {
      can('manage', 'messages');
    } else if (username === 'admin') {
      can('manage', 'all');
    } else {
      can('read', 'all');
    }

    this.ability.update(rules);
  }

  getUsername(): string {
    console.log('this.username', this.username);
    return this.username;
  }
}
