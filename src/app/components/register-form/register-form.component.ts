import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  public user: User;
  constructor() { }

  public resetModel()
  {
    this.user = new User();
  }
  ngOnInit() {
    this.user = new User();
  }

}
