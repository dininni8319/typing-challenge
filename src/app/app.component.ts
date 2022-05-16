import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  randomText =  lorem.sentence();
  
  enteredText = '';
  textColor: boolean = false;
  
  onInput(value: KeyboardEvent) {
    const target = value.target as HTMLTextAreaElement;
    //  console.log(target.value, 'testing the input field value!');
     this.enteredText = target.value
     const stringLenght = this.randomText.length

    //  for (let i = 0; i < stringLenght; i++) {
    //    const el = this.randomText[i];
    //    const enteredEl = this.enteredText[i]
       
    //    if (el === enteredEl) {
    //      this.textColor = true
    //     } else {

    //     this.textColor = false
    //     }
      
          
    //   console.log(this.textColor, 'testing the value of textColor');
    //  }    
  }

  compare(l: string, i: string){

      if (!i) return 'pending';
      return l === i ? 'correct' : 'incorrect'
         
  }
}
