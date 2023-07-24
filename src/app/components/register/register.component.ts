import { Component, OnInit } from '@angular/core';
import { UserModule } from 'src/app/models/user/user.module';
import { UserService } from 'src/app/services/user.service';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  user:UserModule;

  constructor(private userService:UserService, private router:Router) {
    this.user = new UserModule;
  }

  ngOnInit(): void {
  }

  Enviar(ema:string, pass:string) {
    this.user.email = ema;
    this.user.password = pass;
    this.userService.register(this.user)
    .then(response => {console.log(response);
    this.router.navigate(['/login'])
    })
    .catch(error => console.log(error));
  }
}
