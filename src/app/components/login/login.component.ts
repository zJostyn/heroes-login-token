import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModule } from 'src/app/models/user/user.module';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user:UserModule;

  constructor(private userService:UserService, private router:Router) {
    this.user = new UserModule;
  }

  ngOnInit(): void {
  }

  Ingresar(ema:string, pass:string) {
    this.user.email = ema;
    this.user.password = pass;
    this.userService.login(this.user)
    .then(responsive => {console.log(responsive);
    this.router.navigate(['/home'])
    })
    .catch(error => console.log(error));
  }
}
