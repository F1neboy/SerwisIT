import { Component, OnInit } from '@angular/core';
import {Zlecenia} from "../../zlecenia";
import {Router} from "@angular/router";
import {ZleceniaService} from "../services/zlecenia.service";

@Component({
  selector: 'app-naprawa',
  templateUrl: './naprawa.component.html',
  styleUrls: ['./naprawa.component.css']
})
export class NaprawaComponent implements OnInit {

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

  private zlecenieH!: Zlecenia;

  public addZlecenie(name: string, surname: string, phone: string, mail: string, cat: string, probdesc: string){
    this.zlecenieTmp.name=name;
    this.zlecenieTmp.surname=surname;
    this.zlecenieTmp.phone=Number(phone);
    this.zlecenieTmp.mail=mail;
    this.zlecenieTmp.category=cat;
    this.zlecenieTmp.description=probdesc;

    this.zleceniaService.addZlecenie(this.zlecenieTmp).subscribe(
      (response: Zlecenia) =>{
        this.zlecenieH=response;
        this.route.navigate(["potwierdzenie"], {state: {zlecTmp: this.zlecenieH}})
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

  constructor( private route: Router, private zleceniaService: ZleceniaService) { }

  ngOnInit(): void {
  }

}
