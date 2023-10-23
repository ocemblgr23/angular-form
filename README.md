# WebAndroid
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

## Convert Angular Webapp to Android App
### Step by step guide:
Change the below to properties in angular.json <br>
            "outputPath": "dist",<br>
            "maximumError": "5mb"
            To<br>
            npm i @capacitor/core
            npm i -D @capacitor/cli <br>
            npx cap init <br>
            (Ask for appname package name) <br>
            npm i @capacitor/android @capacitor/ios <br>
## Generate module in Angular CLI
`ng g m admin --routing` <br>
`ng g m user --routing` <br>
`ng g m public --routing` <br>
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
