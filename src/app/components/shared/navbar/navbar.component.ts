import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { canActivate } from '@angular/fire/auth-guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{
  public isLogin: boolean | undefined;

  constructor(private router:Router, private userService:UserService) {}

  ngOnInit(): void {
    this.userService.getAuth().subscribe(autho => {
      if(autho) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    })
  }
  
  buscarHeroe(dato:string) {
    this.router.navigate(['/search', dato]);
  }

  Salir(){
    this.userService.logout()
    .then(() => {this.router.navigate(['/login'])})
    .catch(error => console.log(error));
  }
}
