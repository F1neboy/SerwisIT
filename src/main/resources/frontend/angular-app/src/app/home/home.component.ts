import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
