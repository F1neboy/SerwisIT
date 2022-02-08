import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ZleceniaService} from "../services/zlecenia.service";
import {Users} from "../../users";
import {UsersService} from "../services/users.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Form, NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userTmp: Users={
    id:0,
    imie:'',
    nazwisko:'',
    admin:false,
    userphone:0,
    mail:'',
    pass:''
  };

  public checkLogin(mail: string, pass: string){
    this.userService.getUserByMail(mail).subscribe(
      (response: Users)=>{
        this.userTmp=response;
        if(pass!=this.userTmp.pass)
          alert("Nie poprawny login i/lub hasło");
        else
        {
          if(this.userTmp.admin!=true)
            this.route.navigate(['clientpanel'], {state: {userTmp: this.userTmp}});
          else
            this.route.navigate(['adminpanel']);//, {state: {userTmp: this.userTmp}});
        }
      },
      (error: HttpErrorResponse)=>{
        alert("Nie poprawny login i/lub hasło");
      });
  }
  public addUser(mail: string, pass: string, pass2:string, name:string, surn:string, phone: string){
    this.userService.getUserByMail(mail).subscribe(
      (response: Users)=>{
        alert("Konto z podanym adresem e-mail już istnieje!");
      },
      (error:HttpErrorResponse)=>{
        console.clear();
        this.userService.getUserByPhone(Number(phone)).subscribe(
          (response: Users)=>{
            alert("Konto z podanym telefonem już istnieje!");
          },
          (error: HttpErrorResponse)=>{
            console.clear();
            if(pass===pass2) {
              this.userTmp.pass = pass;
              this.userTmp.userphone = Number(phone);
              this.userTmp.mail = mail;
              this.userTmp.imie = name;
              this.userTmp.nazwisko = surn;
              this.userService.addUser(this.userTmp).subscribe(
                (response: Users) => {
                  alert("Konto zostało utworzone! Możesz się na nie zalogować");
                  this.route.navigate(['login']);
                }
              ),
                (error: HttpErrorResponse)=>{
                console.log(error.name);
                }
            }
            else
              alert("Podane hasła się nie zgadzają!");
          }
        );
      });
  }



  loadScripts() {
    const dynamicScripts = [
      "../assets/js/jquery.min.js",
      "./assets/js/jquery.scrollex.min.js",
      "./assets/js/jquery.scrolly.min.js",
      "./assets/js/browser.min.js",
      "./assets/js/breakpoints.min.js",
      "./assets/js/util.js",
      "./assets/js/main.js"
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  constructor( private route: Router, private userService: UsersService) { }

  ngOnInit(): void {
  }

}
