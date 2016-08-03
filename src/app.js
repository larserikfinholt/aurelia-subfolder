export class App {
  constructor() {
    this.message = 'ContactManager running from root';
  }
   configureRouter(config, router){
    console.log("Configure root router...");
    config.title = 'Contacts';
    config.map([
       { route: '',           redirect: 'home' },
      { route: 'home',              moduleId: 'feature-app1/app1',   title: 'Select'}
    ]);
    this.router = router;
  }
}
