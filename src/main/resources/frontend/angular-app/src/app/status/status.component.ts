import { Component, OnInit } from '@angular/core';
import {ZleceniaService} from "../service/zlecenia.service";
import {Router} from "@angular/router";
import {Zlecenia} from "../../zlecenia";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  sprawdzZlec(phone: string, idnum: string): void{
    this.zlecServ.getZlecenia(Number(idnum)).subscribe(
      (response: Zlecenia) => {
        this.zlecTmp=response;
        if(Number(phone)!=this.zlecTmp.phone)
          alert("Nie poprawne dane zlecenia!");
        else
          alert("Is okay, numer zlecenie: "+this.zlecTmp.id+" Numer telefonu: "+this.zlecTmp.phone);
          //this.router.navigate([''], {state: {zlecTmp: this.zlecTmp}});
      },
      (error: HttpErrorResponse) =>{
        alert("Nie poprawne dane zlecenia!");
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
  constructor(private zlecServ: ZleceniaService, private router: Router) {
    this.loadScripts();
  }

  public zlecTmp!: Zlecenia;


  ngOnInit(): void {
  }

}
