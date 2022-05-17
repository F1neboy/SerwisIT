import { Component, OnInit } from '@angular/core';
import {Zlecenia} from "../../zlecenia";
import {Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {ZleceniaService} from "../services/zlecenia.service";
import {Users} from "../../users";
import {UsersService} from "../services/users.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-clientpanel',
  templateUrl: './clientpanel.component.html',
  styleUrls: ['./clientpanel.component.css']
})
export class ClientpanelComponent implements OnInit {

  zlecShow=true;
  userShow=false
  addZlecShow=false;

  public sZlecenia(){
    this.zlecShow=true;
    this.userShow=false;
    this.addZlecShow=false;
  }
  public sDane(){
    this.userShow=true;
    this.zlecShow=false;
    this.addZlecShow=false;
  }
  public sAddZlec(){
    this.userShow=false;
    this.zlecShow=false;
    this.addZlecShow=true;
  }

  private zlecenieTmp: Zlecenia={
    id: 0,
    name: "",
    surname: "",
    phone: 0,
    mail: "",
    category: "",
    description: "",
    status:"Zlecenie przyjęte do analizy",
    servicedesc: ""
  };

  zlecenia!: Observable<Zlecenia[]>;
  userTmp: Users= history.state.userTmp;

  public searchZlecenia(status: String){
    this.zleceniaService.getZleceniaAll().subscribe(
      (response: Zlecenia[])=>{
        if(status!="") {
          this.zlecenia=of(response.filter(i => i.status == status&&i.phone==this.userTmp.userphone&&i.mail==this.userTmp.mail));
        }
        else
          this.zlecenia=of(response.filter(i=>i.phone==this.userTmp.userphone&&i.mail==this.userTmp.mail));
      }
    );
  }

  public addZlecenie(name: string, surname: string, phone: string, mail: string, cat: string, probdesc: string){
    this.zlecenieTmp.name=name;
    this.zlecenieTmp.surname=surname;
    this.zlecenieTmp.phone=Number(phone);
    this.zlecenieTmp.mail=mail;
    this.zlecenieTmp.category=cat;
    this.zlecenieTmp.description=probdesc;

    this.zleceniaService.addZlecenie(this.zlecenieTmp).subscribe(
      (response: Zlecenia) =>{
        alert("Zlecenie zostało dodane!");
      }
    )
  }

  userToSend: Users=this.userTmp;
  public setUser(imie: string, nazwisko:string, userphone: string, mail: string, pass: string){
    this.userToSend.imie=imie;
    this.userToSend.nazwisko=nazwisko;
    this.userToSend.userphone=Number(userphone);
    this.userTmp.mail=mail;
    this.userTmp.pass=pass;
    this.userService.setUser(this.userTmp.id, this.userTmp).subscribe(
      (response: Users)=> {
        alert("Dane konta zostały zmienione! ");
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
