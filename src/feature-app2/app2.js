import {inject} from 'aurelia-framework';
import {Services} from 'resources/services/services';

@inject(Services)
export class App2 {
  constructor(services) {
    this.services=services;
    this.message = 'Hello App2!';
    this.callService();
  }
  
  callService(){
    this.services.callJallaService().then(x=>this.items=x);
  }
}
  