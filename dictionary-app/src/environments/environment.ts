// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  DICTIONARY: {
    BASE_URL: 'https://dictionaryapi.com/api/v3/references/collegiate/json/',
    API_KEY: '387bdc36-eb5b-44b3-97c2-4b4b41b01845'
  },

  THESAURUS: {
    BASE_URL: 'https://dictionaryapi.com/api/v3/references/thesaurus/json/',
    API_KEY: '554815bb-07e9-4b24-8a1d-97e19d14d74f'
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
