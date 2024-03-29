import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {
  userService: UserService;
  user: any;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit(): void {
    this.identify();
  }

  async identify() {
      let data = await this.userService.identify();
      if (data === null) {
        this.identify();
      }
      this.user = data;
  }
}
