import {WebAPI} from './web-api';

export class App1 {
  static inject = [WebAPI];
  
  constructor(api) {
    this.api = api;
    console.log("App1 constructor....")
  }

  configureRouter(config, router){
    console.log("Configure router...");
    

    config.title = 'Contacts';
    config.map([
      { route: '',              moduleId: 'feature-app1/no-selection',   title: 'Select'},
       { route: 'contacts/:id',  moduleId: 'feature-app1/contact-detail', name:'contacts' }
    ]);
    this.router = router;
  }
}
