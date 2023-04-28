import { LightningElement } from 'lwc';

export default class Helloworldcmp extends LightningElement {
    greeting = 'World';
    
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}