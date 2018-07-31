// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCnAD_W7d3EARtt8Tdgr1GwT4wEEhoQB3A",
    authDomain: "todolistapp-3a1fa.firebaseapp.com",
    databaseURL: "https://todolistapp-3a1fa.firebaseio.com",
    projectId: "todolistapp-3a1fa",
    storageBucket: "todolistapp-3a1fa.appspot.com",
    messagingSenderId: "836168276329"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
