import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenCount:number[] = [];
  oddCount:number[] = [];
  handleNewNumber(givenNumber: number){

    if (givenNumber % 2 != 0)
    {
      this.oddCount.push(givenNumber);
    }
    else
    {
      this.evenCount.push(givenNumber);
    }
  }
}
