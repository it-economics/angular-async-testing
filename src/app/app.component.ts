import {Component, OnInit} from '@angular/core';
import {Constants} from "./constants";
const {INIT, SERVICE} = Constants;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit  {
  title = 'hello-world-app';
  initialized: boolean = false;
  clicked: boolean = false;

  async ngOnInit(): Promise<any> {
    await callService(INIT);
    this.initialized = true;
  }

  async click() {
    await callService(SERVICE);
    this.clicked = true;

    /* Evil crash after everything seems to be fine
    await callService(SERVICE + 4);
    throw new Error("Haha gotcha!!!");
    */

  }
}

function callService(duration: number): Promise<any> {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, duration);
  }).then(function() {
    console.log("Wrapped setTimeout after 2000ms");
  });
}
