import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async registerUser(user: any) {
    let result = await axios.post('http://localhost:3001/user/save-user', user);
    return result.data;
  }

}