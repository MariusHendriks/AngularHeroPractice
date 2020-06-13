import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(private authService: AuthService) {}
  username = '';
  name = new FormControl(this.username);

  onSubmit() {
    this.authService.setUsername(this.name.value);

    // this.authService
    //   .getUser()
    //   .subscribe((user) => (this.username = user.username));
    // this.authService.getUsername().subscribe((username) => {
    //   this.username = username;
    //   console.log('this.username', this.username);
    // });
  }
}
