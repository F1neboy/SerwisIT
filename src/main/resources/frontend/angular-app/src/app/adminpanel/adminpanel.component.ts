import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ZleceniaService} from "../services/zlecenia.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Users} from "../../users";
import {UsersService} from "../services/users.service";
import {Zlecenia} from "../../zlecenia";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  allZlecShow=true;
  currZlecShow=false;
  allUsersShow=false;
  currUserShow=false;

  public allZlec(){
    this.allZlecShow=true;
    this.currZlecShow=false;
    this.allUsersShow=false;
    this.currUserShow=false;
  }
  public currZlec(id: number){
    this.getZlecenie(id);
    this.allZlecShow=false;
    this.currZlecShow=true;
    this.allUsersShow=false;
    this.currUserShow=false;
  }

  public allUsers(){
    this.searchUsers("all");
    this.allZlecShow=false;
    this.currZlecShow=false;
    this.allUsersShow=true;
    this.currUserShow=false;
  }
  public currUser(id: number){
    this.getUser(id);
    this.allZlecShow=false;
    this.currZlecShow=false;
    this.allUsersShow=false;
    this.currUserShow=true;
  }

  users!: Observable<Users[]>;
  zlecenia!: Observable<Zlecenia[]>;
  public searchUsers(status: String){
    this.userService.getUsers().subscribe(
      (response: Users[])=>{
        if(status=="admin")
          this.users=of(response.filter(i=>i.admin==true));
        else if(status=="normal")
          this.users=of(response.filter(i=>i.admin==false));
        else if(status=="all")
          this.users=of(response);
      }
    )
  }
  public searchZlecenia(status: String){
    this.zleceniaService.getZleceniaAll().subscribe(
      (response: Zlecenia[])=>{
        if(status!="") {
          this.zlecenia=of(response.filter(i => i.status == status));
        }
        else
          this.zlecenia=of(response);
      }
    );
  }

  userTmp!: Users;
  zlecTmp!: Zlecenia;
  public getUser(id: number){
    this.userService.getUser(id).subscribe(
      (response: Users)=>{
        this.userTmp=response;
      }
    )
  }

  public getZlecenie(id: number){
    this.zleceniaService.getZlecenia(id).subscribe(
      (response:Zlecenia)=>{
        this.zlecTmp=response;
      }
    )
  }

  public setZlecenie(name: string, surname: string, phone: string, mail: string, desc: string, status: string, servdesc: string){
    this.zlecTmp.name=name;
    this.zlecTmp.surname=surname;
    this.zlecTmp.phone=Number(phone);
    this.zlecTmp.mail=mail;
    this.zlecTmp.description=desc;
    this.zlecTmp.status=status;
    this.zlecTmp.servicedesc=servdesc;
    this.zleceniaService.setZlecenie(this.zlecTmp.id, this.zlecTmp).subscribe(
      (response: Zlecenia)=>{
        alert("Zlecenie zostało zaaktualizowane");
      }
    )
  }

  public setUser(name: string, surname: string, phone: string, mail: string, pass: string, admin: string){
    this.userTmp.imie=name;
    this.userTmp.nazwisko=surname;
    this.userTmp.userphone=Number(phone);
    this.userTmp.mail=mail;
    this.userTmp.pass=pass;
    if(admin=="tak")
      this.userTmp.admin=true;
    else if(admin=="nie")
      this.userTmp.admin=false;
    this.userService.setUser(this.userTmp.id, this.userTmp).subscribe(
      (response: Users)=>{
        alert("Dane użytkownika zostały zmienione!");
      }
    )
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
  constructor( private route: Router, private zleceniaService: ZleceniaService, private userService: UsersService) {
  }


  ngOnInit(): void {
    this.searchZlecenia("");
  }

}
