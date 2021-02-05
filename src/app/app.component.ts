import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit  {
  title = 'hello-world-app';
  initialized: boolean = false;
  clicked: boolean = false;

  async ngOnInit(): Promise<any> {
    await callService(2000);
    this.initialized = true;
  }

  async click() {
    await callService(1000);
    this.clicked = true;

  }
}

function callService(duration: number): Promise<any> {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, duration);
  }).then(function() {
    console.log("Wrapped setTimeout after 2000ms");
  });
}
