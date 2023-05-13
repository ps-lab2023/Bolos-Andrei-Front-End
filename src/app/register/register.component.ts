import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  user: User = new User();
  string: String = "";
  constructor(private loginService: LoginService,
    private router: Router) { }
  ngOnInit(): void {

  }
  register() {
    this.loginService.register(this.string, this.user).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));
  }
  onSubmit() {
    this.string = "?name=" + this.user.name+ "&email=" + this.user.email+ "&password=" + this.user.password;
    //console.log(this.user);
    //console.log(this.string);
    this.register();
    this.router.navigate(['login']);
  }
}
