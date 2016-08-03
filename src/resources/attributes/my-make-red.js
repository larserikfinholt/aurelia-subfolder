import {inject, customAttribute, DOM} from 'aurelia-framework';

@customAttribute('my-make-red')
@inject(DOM.Element)
export class MyMakeRed {
    constructor(element) {
      
        this.element = element;
        this.element.setAttribute('style', 'color:red;');
  }

  valueChanged(newValue, oldValue) {
    
  }
}