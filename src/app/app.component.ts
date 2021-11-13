import { Component } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Typing Challenge';
  randomText=lorem.sentence();
  typedText="";

  onInput(event:Event){
    const target = event.target as HTMLInputElement;

    this.typedText = target.value;
  }

  compare(letter:string, text:string){
    if(!text){
      return 'pending'
    }
    return letter === text ? 'correct' : 'incorrect';
  }
}
