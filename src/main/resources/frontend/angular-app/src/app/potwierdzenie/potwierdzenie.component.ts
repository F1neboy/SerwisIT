import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-potwierdzenie',
  templateUrl: './potwierdzenie.component.html',
  styleUrls: ['./potwierdzenie.component.css']
})
export class PotwierdzenieComponent implements OnInit {

  nam: string=history.state.zlecTmp.name;
  surn: string=history.state.zlecTmp.surname;
  id: number=history.state.zlecTmp.id;
  mail: string=history.state.zlecTmp.mail;
  phone: number=history.state.zlecTmp.phone;
  category: string=history.state.zlecTmp.category;
  description: string=history.state.zlecTmp.description;
  status: string=history.state.zlecTmp.status;

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
  constructor() {
    this.loadScripts();
  }
  ngOnInit(): void {
  }

}
