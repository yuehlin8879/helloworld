import { LightningElement } from 'lwc';

export default class Helloworldcmp2 extends LightningElement {
    greeting = 'World';
    
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}