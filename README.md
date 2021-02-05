# Async-Angular-Testing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Bibliography for test examplesgit

https://jasmine.github.io/tutorials/async
https://angular.io/api/core/testing/

### Patterns covered
* [Test with no pattern](src/app/app.component.nooooo.spec.ts) No pattern, this failing test does not handle any async calls
* [Test with Callbacks](src/app/app.component.noway.spec.ts) Callbacks inside Test, app works, but test does not wait for callbacks to complete. (Dangerous!!!)
* [Test with Done Callback](src/app/app.component.done.spec.ts) Jasmine Done callback (https://jasmine.github.io/tutorials/async#callbacks)
* [Test with Angular waitForAsync](src/app/app.component.angular.spec.ts) Angular waitForAsync (https://angular.io/api/core/testing/waitForAsync)
* [Test with async/await](src/app/app.component.asyncawait.spec.ts) async/await pattern (https://jasmine.github.io/tutorials/async#asyncawait)

### Patterns not covered
* fakeAsync / flush / tick (https://angular.io/api/core/testing/fakeAsync)
* Promises in Jasmine (https://jasmine.github.io/tutorials/async#promises)
